import * as Yup from 'yup';
import { nameRules, passwordRules } from '../constants';

export const registerSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Имя слишком короткое')
    .max(30, 'Имя слишком длинное')
    .matches(nameRules, 'Имя может содержать только буквы, пробел и дефис')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль слишком короткий')
    .matches(passwordRules, 'Пароль должен содержать латинские буквы, цифры и спецсимволы')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});

export type RegisterFormValues = Yup.InferType<typeof registerSchema>;
