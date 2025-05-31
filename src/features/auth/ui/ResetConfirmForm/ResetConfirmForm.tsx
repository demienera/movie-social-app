import type { FC } from 'react';
import { enqueueSnackbar } from 'notistack';
import { Formik, type FormikHelpers } from 'formik';
import { FormTextField } from '@shared/ui/FormTextField';
import { FormLayout } from '@shared/ui/FormLayout';
import { AuthSubmitButton } from '../AuthSubmitButton';
import {
  resetConfirmSchema,
  type ResetConfirmFormValues,
} from '@/shared/validation/schemas/resetConfirmSchema';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { handleApiError } from '@/shared/utils/handleApiError';
import { useResetConfirmMutation } from '../../api/api';
import { confirmInitialValues } from '../../constants';
import { useLocation } from 'react-router-dom';

type LocationState = {
  email?: string;
};

export const ResetConfirmForm: FC = () => {
  const { navigateByType } = useNavigation();
  const [resetPasswordConfirm] = useResetConfirmMutation();
  const location = useLocation();
  const state = location.state as LocationState;
  const email = state.email ?? '';

  const handleSubmit = async (
    values: typeof confirmInitialValues,
    { setErrors, setSubmitting }: FormikHelpers<ResetConfirmFormValues>
  ) => {
    try {
      const data = { ...values, email };
      await resetPasswordConfirm(data).unwrap();
      enqueueSnackbar('Пароль успешно изменён', {
        variant: 'success',
        autoHideDuration: 3000,
      });
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
    <Formik<ResetConfirmFormValues>
      initialValues={confirmInitialValues}
      validationSchema={resetConfirmSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton text="Отправить" disabled={isSubmitting || !isValid || !dirty} />
          }
        >
          <FormTextField name="code" label="Код" type="text" required />
          <FormTextField name="newPassword" label="Пароль" type="password" required />
          <FormTextField
            name="confirmPassword"
            label="Подтвердите пароль"
            type="password"
            required
          />
        </FormLayout>
      )}
    </Formik>
  );
};
