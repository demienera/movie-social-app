import { Drawer } from '@mui/material';
import {
  drawerWidthOpen,
  drawerWidthClosed,
  SIDEBAR_ITEMS,
  SIDEBAR_ITEMS_FOOTER,
} from '@/app/config/constants';
import { SideBarList } from './SideBarList';
import { SideBarContext } from './SideBarContext';
import type { DrawerStateProps } from '@/shared/types';

export const SideBar = ({ isOpened }: DrawerStateProps) => {
  return (
    <SideBarContext.Provider value={{ isOpened }}>
      <Drawer
        variant="permanent"
        open={isOpened}
        sx={theme => ({
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
            background: theme.custom.sidebar,
            color: theme.palette.text.primary,
            overflowX: 'hidden',
            transition: 'width 0.3s',
          },
        })}
      >
        <SideBarList items={SIDEBAR_ITEMS} />
        <SideBarList items={SIDEBAR_ITEMS_FOOTER} />
      </Drawer>
    </SideBarContext.Provider>
  );
};
