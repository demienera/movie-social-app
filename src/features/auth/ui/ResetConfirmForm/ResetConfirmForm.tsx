import type { FC } from 'react';
import { Formik } from 'formik';
import { FormTextField } from '@shared/ui/FormTextField';
import { FormLayout } from '@shared/ui/FormLayout';
import { AuthSubmitButton } from '../AuthSubmitButton';
import {
  resetConfirmSchema,
  type ResetConfirmFormValues,
} from '@/shared/validation/schemas/resetConfirmSchema';
import { useNavigation } from '@/shared/hooks/useNavigation';
import { confirmInitialValues } from '../../constants';

export const ResetConfirmForm: FC = () => {
  const { navigateByType } = useNavigation();
  const handleSubmit = (values: typeof confirmInitialValues) => {
    console.log('confirmForm submitted', values);
    navigateByType('close');
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
