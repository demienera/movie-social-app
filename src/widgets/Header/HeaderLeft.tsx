import type { DrawerStateProps } from '@/shared/types';
import { Logo } from '@/shared/ui/Logo/Logo';
import { MenuButton } from '@/shared/ui/MenuButton/MenuButton';
import { Box } from '@mui/material';

export const HeaderLeft = ({ toggleDrawer, isOpened }: DrawerStateProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
    <MenuButton onClick={toggleDrawer} isOpened={isOpened} />
    <Logo />
  </Box>
);
