import { useMediaQuery, useTheme } from '@mui/material';
import { SIDEBAR_ITEMS, SIDEBAR_ITEMS_FOOTER, headerHeight } from '@/app/config/constants';
import { SideBarList } from './SidebarList/SideBarList';
import { SideBarContext } from './context/SideBarContext';
import type { DrawerStateProps } from '@/shared/types';
import { AppDrawer, DrawerContent } from './styled';

export const SideBar = ({ isOpened, onClose }: DrawerStateProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <SideBarContext.Provider value={{ isOpened }}>
      <AppDrawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isOpened}
        isOpened={isOpened}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
          sx: {
            '& .MuiBackdrop-root': {
              top: headerHeight,
              height: `calc(100% - ${headerHeight}px)`,
              zIndex: 1200,
            },
          },
        }}
      >
        <DrawerContent>
          <SideBarList items={SIDEBAR_ITEMS} onClose={onClose} />
          <SideBarList items={SIDEBAR_ITEMS_FOOTER} onClose={onClose} />
        </DrawerContent>
      </AppDrawer>
    </SideBarContext.Provider>
  );
};
