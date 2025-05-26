import { Button, IconButton, styled } from '@mui/material';

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: '10px',
  fontSize: '15px',
  color: '#fff',
  backgroundColor: theme.custom.accentMain,
  textTransform: 'initial',
  '&:hover': {
    backgroundColor: theme.custom.accentHover,
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.custom.accentMain,
    backgroundColor: theme.custom.buttonHoverBg,
  },
}));
