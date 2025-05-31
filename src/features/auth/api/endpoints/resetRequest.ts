import { mockUsers } from '../constants';
import type { ResetRequest } from '../types';

export const resetRequestEndpoint = {
  queryFn: async (emailData: ResetRequest) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const userExists = mockUsers.some(u => u.email === emailData.email);

    if (!userExists) {
      return {
        error: {
          status: 404,
          data: {
            message: 'Пользователь с таким email не найден',
            errors: { email: 'Email не найден' },
          },
        },
      };
    }

    return {
      data: {
        message: 'Код отправлен на почту',
        code: '123456',
      },
    };
  },
};
