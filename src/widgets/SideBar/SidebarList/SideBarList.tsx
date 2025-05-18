import { useMediaQuery, useTheme } from '@mui/material';
import { SideBarItem } from '../SideBarItem';
import type { SideBarListProp } from '../types';
import { NavList } from './styled';

export const SideBarList = ({ items, onClose }: SideBarListProp) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <NavList>
      {items.map(item => (
        <SideBarItem
          key={item.path}
          label={item.label}
          path={item.path}
          icon={item.icon}
          onClose={isMobile ? onClose : undefined}
        />
      ))}
    </NavList>
  );
};
