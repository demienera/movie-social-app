import { Logo } from '@/shared/ui/Logo/Logo';
import type { DrawerStateProps } from '@/shared/types';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderLeft = ({ toggleDrawer, isOpened }: DrawerStateProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
    <IconButton
      onClick={toggleDrawer}
      sx={theme => ({
        p: 1,
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: '#2A2A2A',
          color: theme.custom.colorAccent,
        },
      })}
    >
      {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
    </IconButton>
    <Logo />
  </Box>
);
