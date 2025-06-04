import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { errorSelector, authLoadingSelector, clearError } from '../model/authSlice';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { useAppDispatch, useAppSelector } from '@/app/store/store';

export function useAuthFormCommon() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(errorSelector);
  const isAuthLoading = useAppSelector(authLoadingSelector);
  const { enqueueSnackbar } = useSnackbar();
  const { navigateByType } = useNavigation();

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
    }
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);

  return {
    error,
    isAuthLoading,
    enqueueSnackbar,
    navigateByType,
  };
}
