import { Button, styled, type ButtonProps } from '@mui/material';

interface StyledAuthButtonProps extends ButtonProps {
  to?: string;
}

export const LoginButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'active',
})<StyledAuthButtonProps>(({ theme }) => ({
  borderRadius: '10px',
  fontSize: '15px',
  color: '#fff',
  backgroundColor: theme.custom.accentMain,
  textTransform: 'initial',
  '&:hover': {
    backgroundColor: theme.custom.accentHover,
  },
}));
