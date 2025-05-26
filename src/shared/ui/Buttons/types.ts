import type { ButtonProps, IconButtonProps } from '@mui/material';

type ButtonType = 'primary' | 'icon';

interface BaseButtonProps {
  variantType?: ButtonType;
  children: React.ReactNode;
}

export type Props = (ButtonProps | IconButtonProps) & BaseButtonProps;
