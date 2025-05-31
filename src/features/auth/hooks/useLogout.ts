import { useAppDispatch } from '@/app/store/store';
import { useCallback } from 'react';
import { authApi, useLogoutMutation } from '../api/api';
import { useSnackbar } from 'notistack';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const [logoutTrigger] = useLogoutMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await logoutTrigger();
      enqueueSnackbar('Вы успешно вышли', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Ошибка при выходе', { variant: 'error' });
    }
  };

  return useCallback(() => {
    dispatch(authApi.util.resetApiState());
    handleLogout();
  }, [dispatch, logoutTrigger, enqueueSnackbar]);
};
