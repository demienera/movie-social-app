import type { ApiError } from '@/shared/types';
import type { LogoutResponse } from '../types';

export const logoutEndpoint = {
  queryFn: async (): Promise<{ data: LogoutResponse } | { error: ApiError }> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      return {
        data: {
          success: true,
          message: 'Logout successful',
        },
      };
    } catch (error) {
      return {
        error: {
          status: 500,
          data: {
            message: 'Logout failed',
          },
        },
      };
    }
  },
};
