import type { FC } from 'react';
import type { Props } from './types';
import { StyledIconButton, StyledPrimaryButton } from './styled';
import type { ButtonProps, IconButtonProps } from '@mui/material';

export const ButtonBase: FC<Props> = ({ variantType = 'primary', children, ...props }) => {
  if (variantType === 'icon') {
    return <StyledIconButton {...(props as IconButtonProps)}>{children}</StyledIconButton>;
  }

  return <StyledPrimaryButton {...(props as ButtonProps)}>{children}</StyledPrimaryButton>;
};
