import { AppBar, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppHeader = styled(AppBar)(({ theme }) => ({
  background: theme.custom.headerBg,
}));

export const HeaderContainer = styled(Container)(() => ({
  paddingLeft: 16,
  paddingRight: 16,
}));

export const HeaderToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
