import * as Yup from 'yup';

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

export const resetSchema = Yup.object({
  password: Yup.string()
    .matches(passwordRules, 'Пароль должен содержать минимум одну букву, цифру и символ')
    .required('Обязательное поле'),
  newPassword: Yup.string()
    .matches(passwordRules, 'Пароль должен содержать минимум одну букву, цифру и символ')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});

export type ResetFormValues = Yup.InferType<typeof resetSchema>;
