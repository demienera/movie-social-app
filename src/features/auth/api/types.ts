export type User = {
  id: number;
  email: string;
  password?: string;
  name: string;
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: Omit<User, 'password' | 'token'>;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = Omit<User, 'password' | 'token'>;

export type ResetRequest = {
  email: string;
};

export type ResetRequestResponse = {
  message: string;
  code: string;
};

export type ResetConfirmRequest = {
  email: string;
  code: string;
  newPassword: string;
  confirmPassword: string;
};

export type ResetConfirmResponse = {
  message: string;
  token: string;
};

export type LogoutResponse = {
  success: boolean;
  message?: string;
};
