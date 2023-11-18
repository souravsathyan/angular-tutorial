import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import * as AuthActions from '../store/auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const handleAuthentication = (
  expiresIn: number,
  email: string,
  userId: string,
  token: string
) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
  localStorage.setItem('UserData', JSON.stringify(user));
  return AuthActions.authenticateSuccess({
    email,
    userId,
    token,
    expirationDate,
    redirect: true,
  });
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(AuthActions.authenticateFail({ errorMessage }));
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = 'This password is not correct.';
      break;
  }
  return of(AuthActions.authenticateFail({ errorMessage }));
};

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.Login),
      switchMap((action) => {
        return this.http
          .post<AuthResponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
              environment.firebaseAPIKey,
            {
              email: action.email,
              password: action.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            tap((resData) => {
              this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }),
            map((resData) => {
              return handleAuthentication(
                +resData.expiresIn,
                resData.email,
                resData.localId,
                resData.idToken
              );
            }),
            catchError((errorRes) => {
              return handleError(errorRes);
            })
          );
      })
    )
  );

  authSignup$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.signupStart),
      switchMap((action) => {
        return this.http
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            environment.firebaseAPIKey,
          {
            email: action.email,
            password: action.password,
            returnSecureToken: true,
          }
        )
        .pipe(
            tap(resDate=>{
                this.authService.setLogoutTimer(+resDate.expiresIn * 1000)
            }),
            map(resData=>{
                return handleAuthentication(
                    +resData.expiresIn,
                    resData.email,
                    resData.localId,
                    resData.idToken
                )
            }),
            catchError(errorRes=>{
                return handleError(errorRes)
            })
        )
      })
    )
  );

  authRedirect$ = createEffect(()=>
    this.action$.pipe(
        ofType(AuthActions.authenticateSuccess),
        tap(action=>action.redirect && this.router.navigate(['/']))
    ),{dispatch:false}
  )

  autoLogin$ = createEffect(()=>
  this.action$.pipe(
    ofType(AuthActions.autoLogin),
    map(()=>{
        const userData : {
            email:string,
            id:string,
            _token:string,
            _tokenExpirationDate:string
        }=JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            return {type:'DUMMY'}
        }

        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        )

        if(loadedUser.token){
            const expirationDration = 
            new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
            this.authService.setLogoutTimer(expirationDration);
            return AuthActions.authenticateSuccess({
                email:loadedUser.email,
                userId:loadedUser.id,
                token:loadedUser.token,
                expirationDate:new Date(userData._tokenExpirationDate),
                redirect:false
            })
        }
        return {type:'DUMMY'}
    })
  ))

  authLogout$ = createEffect(()=>
  this.action$.pipe(
    ofType(AuthActions.Logout),
    tap(()=>{
        this.authService.clearLogoutTimer();
        localStorage.removeItem('userData');
        this.router.navigate(['/auth'])
    })
  ),{dispatch:false})

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}
}
