import { mockUsers } from '../constants';
import type { RegisterRequest, User } from '../types';

export const registerEndpoint = {
  queryFn: async (userData: RegisterRequest) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (mockUsers.some(u => u.email === userData.email)) {
      return {
        error: {
          status: 400,
          data: {
            message: 'Пользователь с таким email уже существует',
            errors: { email: 'Email уже занят' },
          },
        },
      };
    }

    if (mockUsers.some(u => u.name === userData.name)) {
      return {
        error: {
          status: 400,
          data: {
            message: 'Пользователь с таким именем уже существует',
            errors: { name: 'Имя уже занято' },
          },
        },
      };
    }

    const newUser: User = {
      id: mockUsers.length + 1,
      ...userData,
      token: `mock-jwt-token-${mockUsers.length + 1}`,
    };

    mockUsers.push(newUser);

    return {
      data: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
    };
  },
};
