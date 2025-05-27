import type { FC } from 'react';
import { Formik } from 'formik';
import { FormTextField } from '@shared/ui/FormTextField';
import { resetSchema, type ResetFormValues } from '@/shared/validation/schemas/resetSchema';
import { FormLayout } from '@shared/ui/FormLayout';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { resetInitialValues } from '../../constants';
import type { ResetRequestFormProps } from './types';

export const ResetRequestForm: FC<ResetRequestFormProps> = ({ onSuccess }) => {
  const handleSubmit = (values: typeof resetInitialValues) => {
    console.log('resetForm submitted', values);
    onSuccess(values.email);
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
