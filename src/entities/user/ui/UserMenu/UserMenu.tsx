import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <Button
      component={NavLink}
      to={'/login'}
      sx={{
        borderColor: '#fff',
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgba(235, 5, 89, 0.06)',
          color: '#eb0559',
        },
      }}
    >
      Войти
    </Button>
  );
};
