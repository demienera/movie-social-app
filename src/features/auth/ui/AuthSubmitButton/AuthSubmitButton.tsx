import type { FC } from 'react';
import { ButtonBase } from '@/shared/ui/Buttons';
import type { AuthSubmitButtonProps } from './types';

export const AuthSubmitButton: FC<AuthSubmitButtonProps> = ({ text, ...props }) => (
  <ButtonBase fullWidth variant="contained" type="submit" {...props}>
    {text}
  </ButtonBase>
);
