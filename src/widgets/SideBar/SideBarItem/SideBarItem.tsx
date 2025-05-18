import { ListItem } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import type { SideBarItemProps } from '../types';
import { ItemLink, ItemIcon, ItemText } from './styled';

export const SideBarItem = ({ label, path, icon, onClose }: SideBarItemProps) => {
  const location = useLocation();

  const isActive =
    (path === '/new' && (location.pathname === '/new' || location.pathname === '/')) ||
    location.pathname === path;

  const handleItemClick = () => {
    if (typeof onClose === 'function') {
      requestAnimationFrame(() => {
        (document.activeElement as HTMLElement)?.blur();
      });
      onClose();
    }
  };

  return (
    <ListItem disablePadding>
      <ItemLink component={NavLink} to={path} active={isActive} onClick={handleItemClick}>
        <ItemIcon>{icon}</ItemIcon>
        <ItemText primary={label} />
      </ItemLink>
    </ListItem>
  );
};
