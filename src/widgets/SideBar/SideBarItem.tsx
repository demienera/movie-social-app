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
        sx={theme => ({
          gap: '20px',
          pl: 3,
          minHeight: '48px',
          '&.active': {
            backgroundColor: 'action.selected',
          },
          '&:hover': {
            backgroundColor: theme.custom.buttonHoverBg,
            color: theme.custom.colorAccent,
            '& .MuiListItemIcon-root': {
              color: theme.custom.colorAccent,
            },
          },
        })}
      >
        <ListItemIcon sx={theme => ({ minWidth: '20px', color: theme.palette.text.primary })}>
          {icon}
        </ListItemIcon>
        {isOpened && <ListItemText primary={label} sx={{ minWidth: '116px' }} />}
      </ListItemButton>
    </ListItem>
  );
};
