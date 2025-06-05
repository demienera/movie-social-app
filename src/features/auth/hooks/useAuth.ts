import { useAppSelector } from '@/app/store/store';
import { isAuthSelector, userSelector } from '../model/authSlice';
import { createSelector } from '@reduxjs/toolkit';

const authSelector = createSelector([userSelector, isAuthSelector], (user, isAuth) => ({
  user,
  isAuth,
}));

export const useAuth = () => {
  const storeAuth = useAppSelector(authSelector);
  const token = localStorage.getItem('token');
  const isAuthenticated = Boolean(token) || storeAuth.isAuth;
  return {
    ...storeAuth,
    token,
    isAuthenticated,
  };
};
