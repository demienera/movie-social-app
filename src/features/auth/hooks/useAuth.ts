import { useAppSelector } from '@/app/store/store';
import { isAuthSelector, userSelector } from '../model/authSlice';
import { createSelector } from '@reduxjs/toolkit';

const authSelector = createSelector([userSelector, isAuthSelector], (user, isAuth) => ({
  user,
  isAuth,
}));

export const useAuth = () => {
  return useAppSelector(authSelector);
};
