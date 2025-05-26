import type { FC } from 'react';
import { Formik } from 'formik';
import { FormTextField } from '@shared/ui/FormTextField';
import { resetSchema, type ResetFormValues } from '@/shared/validation/schemas/resetSchema';
import { FormLayout } from '@shared/ui/FormLayout/FormLayout';
import { AuthSubmitButton } from '../AuthSubmitButton';
import { resetInitialValues } from '../../constants';

export const ResetForm: FC = () => {
  const handleSubmit = (values: typeof resetInitialValues) => {
    console.log('resetForm submitted', values);
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
            <AuthSubmitButton text="Сбросить" disabled={isSubmitting || !isValid || !dirty} />
          }
        >
          <FormTextField name="password" label="Пароль" type="password" required />
          <FormTextField name="newPassword" label="Новый пароль" type="password" required />
          <FormTextField name="confirmPassword" label="Повторите пароль" type="password" required />
        </FormLayout>
      )}
    </Formik>
  );
};
