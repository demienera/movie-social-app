import type { DrawerStateProps } from '@/shared/types';
import { Logo } from '@/shared/ui/Logo/Logo';
import { MenuButton } from '@/shared/ui/Buttons/MenuButton/MenuButton';
import { Container } from './styled';

export const HeaderBranding = ({ toggleDrawer, isOpened }: DrawerStateProps) => (
  <Container>
    <MenuButton onClick={toggleDrawer} isOpened={isOpened} />
    <Logo />
  </Container>
);
