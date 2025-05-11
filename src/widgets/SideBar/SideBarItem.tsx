import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSideBar } from './SideBarContext';
import type { SideBarItemProps } from './types';

export const SideBarItem = ({ label, path, icon }: SideBarItemProps) => {
  const { isOpened } = useSideBar();
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={NavLink}
        to={path}
        sx={{
          gap: '20px',
          pl: 3,
          minHeight: '48px',
          '&.active': {
            backgroundColor: 'action.selected',
          },
          '&:hover': {
            backgroundColor: '#2a2a2a',
            color: '#eb0559',
            '& .MuiListItemIcon-root': {
              color: '#eb0559',
            },
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: '20px', color: '#fff' }}>{icon}</ListItemIcon>
        {isOpened && <ListItemText primary={label} sx={{ minWidth: '116px' }} />}
      </ListItemButton>
    </ListItem>
  );
};
