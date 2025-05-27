import * as Yup from 'yup';
import { codeRules, passwordRules } from '../constants';

export const resetConfirmSchema = Yup.object({
  code: Yup.string().required('Код обязателен').matches(codeRules, 'Код должен состоять из 6 цифр'),
  newPassword: Yup.string()
    .min(6, 'Пароль слишком короткий')
    .matches(passwordRules, 'Пароль должен содержать латинские буквы, цифры и спецсимволы')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});

export type ResetConfirmFormValues = Yup.InferType<typeof resetConfirmSchema>;
