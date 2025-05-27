import * as Yup from 'yup';

export const resetSchema = Yup.object({
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
});

export type ResetFormValues = Yup.InferType<typeof resetSchema>;
