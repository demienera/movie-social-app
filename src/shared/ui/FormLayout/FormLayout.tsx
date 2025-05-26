import type { FC } from 'react';
import type { FormProps } from './types';
import { FormContent, StyledForm } from './styled';

export const FormLayout: FC<FormProps> = ({ submitButton, children, footer }) => (
  <StyledForm autoComplete="off">
    <FormContent>
      {children}
      {submitButton}
      {footer}
    </FormContent>
  </StyledForm>
);
