import { Box, Button, styled, Typography } from '@mui/material';

export const LinkRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

export const PromptText = styled(Typography)({
  fontSize: '15px',
});

export const StyledButtonLink = styled(Button)(({ theme }) => ({
  background: 'none',
  border: 'none',
  padding: 0,
  font: 'inherit',
  alignSelf: 'self-start',
  minWidth: '50px',
  color: theme.custom.accentMain,
  textDecoration: 'none',
  cursor: 'pointer',
  textTransform: 'initial',

  '&:hover': {
    color: theme.custom.accentHover,
    textDecoration: 'underline',
  },
}));
