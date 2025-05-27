import { useState, type FC } from 'react';
import { useField } from 'formik';
import { PasswordToggle } from '../PasswordToggle';
import type { FieldTextProps } from './types';
import { StyledFormTextField } from './styled';

export const FormTextField: FC<FieldTextProps> = ({ name, type = 'text', ...props }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === 'password';

  const toggleShowPassword = () => {
    setShowPassword(show => !show);
  };

  return (
    <StyledFormTextField
      {...field}
      {...props}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      type={isPasswordField && showPassword ? 'text' : type}
      fullWidth
      variant="outlined"
      InputProps={
        isPasswordField
          ? {
              endAdornment: <PasswordToggle show={showPassword} onToggle={toggleShowPassword} />,
            }
          : undefined
      }
    />
  );
};
