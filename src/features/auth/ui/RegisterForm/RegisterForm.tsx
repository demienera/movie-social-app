import type { FC } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import { FormTextField } from '@shared/ui/FormTextField';
import {
  registerSchema,
  type RegisterFormValues,
} from '@/shared/validation/schemas/registerSchema';
import { FormLayout } from '@shared/ui/FormLayout';
import { AuthFormLinks } from '../AuthFormLinks';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { handleApiError } from '@/shared/utils/handleApiError';
import { useAuthFormCommon } from '../../hooks/useAuthFormCommon';
import { registerInitialValues } from '../../constants';
import { useRegisterMutation } from '../../api/api';

export const RegisterForm: FC = () => {
  const [register] = useRegisterMutation();
  const { navigateByType, enqueueSnackbar, isAuthLoading } = useAuthFormCommon();

  const handleSubmit = async (
    values: RegisterFormValues,
    { setErrors, setSubmitting }: FormikHelpers<RegisterFormValues>
  ) => {
    try {
      const { confirmPassword, ...registerData } = values;
      await register(registerData).unwrap();

      enqueueSnackbar('Регистрация прошла успешно!', {
        variant: 'success',
        autoHideDuration: 3000,
      });
      navigateByType('close');
    } catch (error) {
      const message = handleApiError(error, setErrors);

      enqueueSnackbar(message || 'Ошибка регистрации', {
        variant: 'error',
        autoHideDuration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik<RegisterFormValues>
      initialValues={registerInitialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isAuthLoading || isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton
              text="Зарегистрироваться"
              disabled={isAuthLoading || isSubmitting || !isValid || !dirty}
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
