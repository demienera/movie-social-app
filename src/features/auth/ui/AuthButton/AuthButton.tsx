import { Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LoginButton } from './styled';

export const AuthButton = () => {
  return (
    <Tooltip title="Войти в профиль" arrow>
      <LoginButton component={NavLink} to={'/login'}>
        Войти
      </LoginButton>
    </Tooltip>
  );
};
