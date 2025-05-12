import { AppBar, Toolbar, Container } from '@mui/material';
import { HeaderRight } from './HeaderRight';
import type { DrawerStateProps } from '@/shared/types';
import { HeaderLeft } from './HeaderLeft';

export const Header = ({ toggleDrawer, isOpened }: DrawerStateProps) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1E1E1E' }}>
      <Container disableGutters maxWidth={false} sx={{ px: 2 }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderLeft toggleDrawer={toggleDrawer} isOpened={isOpened} />
          <HeaderRight />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
