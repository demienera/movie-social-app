import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <Button
      component={NavLink}
      to={'/login'}
      sx={theme => ({
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: 'rgba(235, 5, 89, 0.06)',
          color: theme.custom.colorAccent,
        },
      })}
    >
      Войти
    </Button>
  );
};
