import { mockUsers } from '../constants';
import type { ResetConfirmRequest } from '../types';

export const resetConfirmEndpoint = {
  queryFn: async (resetData: ResetConfirmRequest) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (resetData.code !== '123456') {
      return {
        error: {
          status: 400,
          data: {
            message: 'Код неверный',
            errors: { code: 'Код неверный' },
          },
        },
      };
    }

    const user = mockUsers.find(u => u.email === resetData.email);
    if (!user) {
      return {
        error: {
          status: 404,
          data: {
            message: 'Пользователь не найден',
            errors: {},
          },
        },
      };
    }

    if (user.password === resetData.newPassword) {
      return {
        error: {
          status: 400,
          data: {
            message: 'Новый пароль должен отличаться от старого',
            errors: { newPassword: 'Новый пароль должен отличаться от старого' },
          },
        },
      };
    }

    user.password = resetData.newPassword;

    return {
      data: {
        message: 'Пароль успешно изменён',
        token: user.token,
      },
    };
  },
};
