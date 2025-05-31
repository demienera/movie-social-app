import type { MenuProps } from '@mui/material';
import type { ReactNode } from 'react';

export type AvatarMenuProps = MenuProps & {
  items: {
    content: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  }[];
  onClose: () => void;
};
