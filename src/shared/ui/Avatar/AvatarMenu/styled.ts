import { MenuItem, styled } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    color: theme.custom.accentMain,
  },
}));
