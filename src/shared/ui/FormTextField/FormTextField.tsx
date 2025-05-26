import type { FC } from 'react';
import { useField } from 'formik';
import type { FieldTextProps } from './types';
import { StyledFormTextField } from './styled';

export const FormTextField: FC<FieldTextProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <StyledFormTextField
      {...field}
      {...props}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
      variant="outlined"
    />
  );
};
