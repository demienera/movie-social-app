import { Logo } from '@/shared/ui/Logo/Logo';
import type { DrawerStateProps } from '@/shared/types';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderLeft = ({ toggleDrawer, isOpened }: DrawerStateProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
    <IconButton
      onClick={toggleDrawer}
      sx={{
        p: 1,
        color: '#fff',
        '&:hover': {
          backgroundColor: '#2A2A2A',
          color: '#eb0559',
        },
      }}
    >
      {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
    </IconButton>
    <Logo />
  </Box>
);
