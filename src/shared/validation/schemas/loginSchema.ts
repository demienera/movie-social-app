import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

export type LoginFormValues = Yup.InferType<typeof loginSchema>;
