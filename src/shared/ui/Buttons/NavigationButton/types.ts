import type { IconButtonProps } from '@mui/material';

export interface NavigationButtonProps extends IconButtonProps {
  navType: 'back' | 'close' | 'navigate';
  tooltip?: string;
  to?: string;
  icon: React.ReactNode;
}
