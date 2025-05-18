import { Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LogoLink } from './styled';

export const Logo = () => {
  return (
    <Tooltip title="Перейти на главную" arrow placement="right">
      <LogoLink variant="h6" noWrap component={NavLink} to="/">
        LOGO
      </LogoLink>
    </Tooltip>
  );
};
