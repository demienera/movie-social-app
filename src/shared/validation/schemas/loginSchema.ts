import * as Yup from 'yup';
import { passwordRules } from '../constants';

export const loginSchema = Yup.object({
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль слишком короткий')
    .matches(passwordRules, 'Пароль должен содержать латинские буквы, цифры и спецсимволы')
    .required('Обязательное поле'),
});

export type LoginFormValues = Yup.InferType<typeof loginSchema>;
