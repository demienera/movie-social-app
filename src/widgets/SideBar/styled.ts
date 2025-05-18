import { Box, Drawer, type DrawerProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { headerHeight, drawerWidthOpen, drawerWidthClosed } from '@/app/config/constants';

interface StyledSideBarProps extends DrawerProps {
  isOpened?: boolean;
}

export const AppDrawer = styled(Drawer, {
  shouldForwardProp: prop => prop !== 'isOpened',
})<StyledSideBarProps>(({ theme, isOpened }) => {
  const width = isOpened ? drawerWidthOpen : drawerWidthClosed;

  return {
    width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      top: headerHeight,
      width,
      background: theme.custom.sidebarBg,
      color: theme.palette.text.primary,
      overflowX: 'hidden',
      transition: 'width 0.3s',
    },
  };
});

export const DrawerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '15px',
  height: 'calc(100vh - 64px)',
  width: '100%',
}));
