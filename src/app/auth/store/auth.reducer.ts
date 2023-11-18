import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import { Login } from './auth.actions';
import * as AuthActions from '../store/auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

const _authReducer = createReducer(
  initialState,
  on(
    AuthActions.Login, 
    AuthActions.signupStart, 
    (state, action) => ({
    ...state,
    authError: null,
    loading: true,
  })),

  on(AuthActions.authenticateSuccess,
    (state,action)=>({
        ...state,
        athError:null,
        loading:false,
        user:new User(
            action.email,
            action.userId,
            action.token,
            action.expirationDate
        )
    })),

    on(
        AuthActions.authenticateFail,
        (state,action)=>({
            ...state,
            user:null,
            authError:action.errorMessage,
            loading:false
        })
    ),

    on(
        AuthActions.Logout,
        (state)=>({
            ...state,
            user:null
        })
    ),

    on(
        AuthActions.clearError,
        (state)=>({
            ...state,
            authError:null
        })
    )
);

export function athReducer(state:State,action:Action){
    return _authReducer(state,action)
}
