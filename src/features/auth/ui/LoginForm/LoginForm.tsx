import type { FC } from 'react';
import { Formik } from 'formik';
import { loginSchema, type LoginFormValues } from '@/shared/validation/schemas/loginSchema';
import { FormTextField } from '@shared/ui/FormTextField';
import { FormLayout } from '@shared/ui/FormLayout';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { AuthFormLinks } from '../AuthFormLinks';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { loginInitialValues } from '../../constants';

export const LoginForm: FC = () => {
  const { navigateByType } = useNavigation();
  const handleSubmit = (values: typeof loginInitialValues) => {
    console.log('loginForm submitted', values);
    navigateByType('close');
  };

  return (
    <Formik<LoginFormValues>
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton text="Войти" disabled={isSubmitting || !isValid || !dirty} />
          }
          footer={<AuthFormLinks variant="login" />}
        >
          <FormTextField name="email" label="Email" required />
          <FormTextField name="password" label="Пароль" type="password" required />
        </FormLayout>
      )}
    </Formik>
  );
};
