import { AppHeader, HeaderContainer, HeaderToolbar } from './styled';
import { HeaderUserArea } from './HeaderUserArea';
import { HeaderBranding } from './HeaderBranding';
import type { DrawerStateProps } from '@/shared/types';

export const Header = ({ toggleDrawer, isOpened }: DrawerStateProps) => {
  return (
    <AppHeader position="sticky">
      <HeaderContainer disableGutters maxWidth={false}>
        <HeaderToolbar disableGutters>
          <HeaderBranding toggleDrawer={toggleDrawer} isOpened={isOpened} />
          <HeaderUserArea />
        </HeaderToolbar>
      </HeaderContainer>
    </AppHeader>
  );
};
