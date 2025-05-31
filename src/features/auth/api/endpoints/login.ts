import { mockUsers } from '../constants';
import type { LoginRequest } from '../types';

export const loginEndpoint = {
  queryFn: async (credentials: LoginRequest) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const user = mockUsers.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      return {
        error: {
          status: 401,
          data: {
            message: 'Пользователь не найден',
            errors: { email: 'Такая почта не зарегистрирована' },
          },
        },
      };
    }

    return {
      data: {
        token: user.token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
    };
  },
};
