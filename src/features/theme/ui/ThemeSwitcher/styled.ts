import { IconButton, styled } from '@mui/material';

export const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.custom.buttonHoverBg,
    color: theme.custom.accentMain,
  },
}));
