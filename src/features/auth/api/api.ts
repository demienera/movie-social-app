import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetRequest,
  ResetRequestResponse,
  ResetConfirmRequest,
  ResetConfirmResponse,
  LogoutResponse,
} from './types';
import { loginEndpoint } from './endpoints/login';
import { registerEndpoint } from './endpoints/register';
import { resetRequestEndpoint } from './endpoints/resetRequest';
import { resetConfirmEndpoint } from './endpoints/resetConfirm';
import { logoutEndpoint } from './endpoints/logout';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>(loginEndpoint),
    logout: builder.mutation<LogoutResponse, void>(logoutEndpoint),
    register: builder.mutation<RegisterResponse, RegisterRequest>(registerEndpoint),
    resetRequest: builder.mutation<ResetRequestResponse, ResetRequest>(resetRequestEndpoint),
    resetConfirm: builder.mutation<ResetConfirmResponse, ResetConfirmRequest>(resetConfirmEndpoint),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useResetRequestMutation,
  useResetConfirmMutation,
} = authApi;

export type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetRequest,
  ResetRequestResponse,
  ResetConfirmRequest,
  ResetConfirmResponse,
};
