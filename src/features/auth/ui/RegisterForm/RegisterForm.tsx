import type { FC } from 'react';
import { Formik } from 'formik';
import { FormTextField } from '@shared/ui/FormTextField';
import {
  registerSchema,
  type RegisterFormValues,
} from '@/shared/validation/schemas/registerSchema';
import { FormLayout } from '@shared/ui/FormLayout/FormLayout';
import { AuthFormLinks } from '../AuthFormLinks';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { registerInitialValues } from '../../constants';

export const RegisterForm: FC = () => {
  const handleSubmit = (values: typeof registerInitialValues) => {
    console.log('registerForm submitted', values);
  };

  return (
    <Formik<RegisterFormValues>
      initialValues={registerInitialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton
              text="Зарегистрироваться"
              disabled={isSubmitting || !isValid || !dirty}
            />
          }
          footer={<AuthFormLinks variant="register" />}
        >
          <FormTextField name="name" label="Имя" required />
          <FormTextField name="email" label="Email" required />
          <FormTextField name="password" label="Пароль" type="password" required />
          <FormTextField name="confirmPassword" label="Повторите пароль" type="password" required />
        </FormLayout>
      )}
    </Formik>
  );
};
