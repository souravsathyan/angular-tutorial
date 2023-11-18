import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Auth] Login',
  props<{
    email: string;
    password: string;
  }>()
);

export const signupStart = createAction(
  '[Auth] Signup Start',
  props<{
    email: string;
    password: string;
  }>()
);

export const authenticateSuccess = createAction(
  '[Auth] Authenticate Success',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
  }>()
);

export const authenticateFail = createAction(
  '[Auth] Authenticate Fail',
  props<{
    errorMessage: string;
  }>()
);

export const clearError = createAction('[Auth] Clear Error');

export const autoLogin = createAction('[Auth] Auto Login');

export const Logout = createAction('[Atuh] Logout');
