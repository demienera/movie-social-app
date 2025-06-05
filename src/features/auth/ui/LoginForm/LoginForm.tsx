import type { FC } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import { loginSchema, type LoginFormValues } from '@/shared/validation/schemas/loginSchema';
import { FormTextField } from '@shared/ui/FormTextField';
import { FormLayout } from '@shared/ui/FormLayout';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { AuthFormLinks } from '../AuthFormLinks';
import { handleApiError } from '@/shared/utils/handleApiError';
import { useLoginMutation, type LoginRequest } from '../../api/api';
import { useAuthFormCommon } from '../../hooks/useAuthFormCommon';
import { loginInitialValues } from '../../constants';

export const LoginForm: FC = () => {
  const [login] = useLoginMutation();
  const { navigateByType, enqueueSnackbar, isAuthLoading } = useAuthFormCommon();

  const handleSubmit = async (
    values: LoginRequest,
    { setErrors, setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const response = await login(values).unwrap();
      localStorage.setItem('token', response.token);
      enqueueSnackbar('Успешный вход!', { variant: 'success' });
      navigateByType('close');
    } catch (error) {
      const message = handleApiError(error, setErrors);

      enqueueSnackbar(message, {
        variant: 'error',
        autoHideDuration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik<LoginFormValues>
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isAuthLoading || isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton
              text="Войти"
              disabled={isAuthLoading || isSubmitting || !isValid || !dirty}
            />
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
