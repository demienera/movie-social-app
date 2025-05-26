import type { LoginFormValues } from '@/shared/validation/schemas/loginSchema';
import type { RegisterFormValues } from '@/shared/validation/schemas/registerSchema';
import type { ResetFormValues } from '@/shared/validation/schemas/resetSchema';

export const registerInitialValues: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const loginInitialValues: LoginFormValues = {
  email: '',
  password: '',
};

export const resetInitialValues: ResetFormValues = {
  password: '',
  newPassword: '',
  confirmPassword: '',
};
