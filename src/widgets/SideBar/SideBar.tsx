import { Drawer } from '@mui/material';
import {
  drawerWidthOpen,
  drawerWidthClosed,
  SIDEBAR_ITEMS,
  SIDEBAR_ITEMS_FOOTER,
} from '@/app/config/constants';
import { SideBarList } from './SideBarList';
import { SideBarContext } from './SideBarContext';
import type { DrawerStateProps } from '@/types';

export const SideBar = ({ isOpened }: DrawerStateProps) => {
  return (
    <SideBarContext.Provider value={{ isOpened }}>
      <Drawer
        variant="permanent"
        open={isOpened}
        sx={{
          width: isOpened ? drawerWidthOpen : drawerWidthClosed,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            position: 'fixed',
            top: '64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'calc(100vh - 64px)',
            width: isOpened ? drawerWidthOpen : drawerWidthClosed,
            backgroundColor: '#181818',
            color: '#fff',
            overflowX: 'hidden',
            transition: 'width 0.3s',
          },
        }}
      >
        <SideBarList items={SIDEBAR_ITEMS} />
        <SideBarList items={SIDEBAR_ITEMS_FOOTER} />
      </Drawer>
    </SideBarContext.Provider>
  );
};
