import * as Yup from 'yup';

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

export const registerSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Имя слишком короткое')
    .max(30, 'Имя слишком длинное')
    .matches(/^[а-яА-ЯёЁa-zA-Z\s-]+$/, 'Имя может содержать только буквы, пробел и дефис')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .matches(passwordRules, 'Пароль должен содержать минимум одну букву, цифру и символ')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
});

export type RegisterFormValues = Yup.InferType<typeof registerSchema>;
