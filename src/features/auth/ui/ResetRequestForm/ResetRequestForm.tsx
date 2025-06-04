import type { FC } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import { useSnackbar } from 'notistack';
import { FormTextField } from '@shared/ui/FormTextField';
import { FormLayout } from '@shared/ui/FormLayout';
import { handleApiError } from '@/shared/utils/handleApiError';
import { resetSchema, type ResetFormValues } from '@/shared/validation/schemas/resetSchema';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { useResetRequestMutation } from '../../api/api';
import { resetInitialValues } from '../../constants';
import type { ResetRequestFormProps } from './types';

export const ResetRequestForm: FC<ResetRequestFormProps> = ({ onSuccess }) => {
  const [resetRequest] = useResetRequestMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: ResetFormValues,
    { setErrors, setSubmitting }: FormikHelpers<ResetFormValues>
  ) => {
    try {
      await resetRequest(values).unwrap();
      enqueueSnackbar('Код отправлен на почту', {
        variant: 'success',
        autoHideDuration: 3000,
      });
      onSuccess?.(values.email);
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
    <Formik<ResetFormValues>
      initialValues={resetInitialValues}
      validationSchema={resetSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton text="Отправить" disabled={isSubmitting || !isValid || !dirty} />
          }
        >
          <FormTextField name="email" label="Email" required />
        </FormLayout>
      )}
    </Formik>
  );
};
