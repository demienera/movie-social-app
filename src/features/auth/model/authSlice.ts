import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, LoginResponse, RegisterResponse } from '../api/types';
import { authApi } from '../api/api';
import type { ApiError } from '@/shared/types';

export type UserState = {
  user: User | null;
  isAuth: boolean;
  isAuthChecked: boolean;
  authLoading: boolean;
  error: string | null;
  resetRequesting: boolean;
  resetConfirming: boolean;
  resetSuccess: boolean;
};

const initialState: UserState = {
  user: null,
  isAuth: false,
  isAuthChecked: false,
  authLoading: false,
  error: null,
  resetRequesting: false,
  resetConfirming: false,
  resetSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    userSelector: state => state.user,
    nameSelector: state => state.user?.name || '',
    emailSelector: state => state.user?.email || '',
    isAuthSelector: state => state.isAuth,
    isAuthCheckedSelector: state => state.isAuthChecked,
    authLoadingSelector: state => state.authLoading,
    errorSelector: state => state.error,
    resetRequestingSelector: state => state.resetRequesting,
    resetConfirmingSelector: state => state.resetConfirming,
    resetSuccessSelector: state => state.resetSuccess,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      //Вход в профиль
      .addMatcher(authApi.endpoints.login.matchPending, state => {
        state.authLoading = true;
        state.isAuth = false;
        state.error = null;
      })
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.user = {
            ...action.payload.user,
            token: action.payload.token,
          };
          state.isAuth = true;
          state.authLoading = false;
          state.error = null;
        }
      )
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        const error = action.payload as ApiError;

        state.error = error.data.message;
        state.authLoading = false;
        state.isAuth = false;
      })
      // Выход из профиля
      .addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
        state.user = null;
        state.isAuth = false;
        state.isAuthChecked = true;
        state.error = null;
      })
      .addMatcher(authApi.endpoints.logout.matchRejected, (state, action) => {
        const error = action.payload as ApiError;
        state.error = error.data.message;
        state.isAuth = false;
        state.isAuthChecked = false;
      })
      // Выход из профиля
      .addMatcher(authApi.endpoints.register.matchPending, state => {
        state.isAuth = false;
        state.authLoading = true;
      })
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, action: PayloadAction<RegisterResponse>) => {
          state.user = {
            ...action.payload,
            token: '',
          };
          state.isAuth = true;
          state.authLoading = false;
          state.error = null;
        }
      )
      .addMatcher(authApi.endpoints.register.matchRejected, (state, action) => {
        const error = action.payload as ApiError;
        state.error = error.data.message;
        state.isAuth = false;
        state.authLoading = false;
      })
      //Сброс пароля
      .addMatcher(authApi.endpoints.resetRequest.matchPending, state => {
        state.resetRequesting = true;
        state.resetSuccess = false;
      })
      .addMatcher(authApi.endpoints.resetRequest.matchFulfilled, state => {
        state.resetRequesting = false;
        state.resetSuccess = true;
      })
      .addMatcher(authApi.endpoints.resetRequest.matchRejected, state => {
        state.resetRequesting = false;
        state.resetSuccess = false;
      })

      .addMatcher(authApi.endpoints.resetConfirm.matchPending, state => {
        state.resetConfirming = true;
      })
      .addMatcher(authApi.endpoints.resetConfirm.matchFulfilled, state => {
        state.resetConfirming = false;
        state.resetSuccess = true;
      })
      .addMatcher(authApi.endpoints.resetConfirm.matchRejected, state => {
        state.resetConfirming = false;
      });
  },
});

export const {
  userSelector,
  nameSelector,
  emailSelector,
  isAuthSelector,
  errorSelector,
  isAuthCheckedSelector,
  authLoadingSelector,
  resetRequestingSelector,
  resetConfirmingSelector,
  resetSuccessSelector,
} = authSlice.selectors;

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
