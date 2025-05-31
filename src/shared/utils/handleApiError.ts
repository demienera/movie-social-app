import type { ApiError } from '../types';

export const handleApiError = (
  error: unknown,
  setErrors?: (errors: Record<string, string>) => void
) => {
  if (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof error.data === 'object'
  ) {
    const apiError = error as ApiError;

    if (apiError.data?.errors && setErrors) {
      setErrors(apiError.data.errors);
    }

    return apiError.data?.message || 'Произошла ошибка';
  }

  return 'Неизвестная ошибка';
};
