import { IconButton, styled } from '@mui/material';

export const MenuToggleButton = styled(IconButton)(({ theme }) => ({
  padding: '10px',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.custom.buttonHoverBg,
    color: theme.custom.accentMain,
  },
}));
