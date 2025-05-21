import { Box, Drawer, type DrawerProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { drawerWidthOpen, drawerWidthClosed } from '@/app/config/constants';

interface StyledSideBarProps extends DrawerProps {
  isOpened?: boolean;
  topOffset?: number;
  topOffsetMobile?: number;
  isMobile?: boolean;
}

export const AppDrawer = styled(Drawer, {
  shouldForwardProp: (prop: string) =>
    !['isOpened', 'topOffset', 'topOffsetMobile', 'isMobile'].includes(prop),
})<StyledSideBarProps>(({ theme, isOpened, topOffset, topOffsetMobile, isMobile }) => {
  const top = isMobile ? (topOffsetMobile ?? 64) : (topOffset ?? 64);
  const width = isOpened ? drawerWidthOpen : drawerWidthClosed;

  return {
    width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      top,
      width,
      background: theme.custom.sidebarBg,
      color: theme.palette.text.primary,
      overflowX: 'hidden',
      transition: 'width 0.3s',
    },
  };
});

export const DrawerContent = styled(Box, {
  shouldForwardProp: prop => prop !== 'topOffset',
})<{ topOffset?: number }>(({ topOffset = 64 }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '15px',
  height: `calc(100vh - ${topOffset}px)`,
  width: '100%',
}));
