import { styled, Typography, type TypographyProps } from '@mui/material';

interface StyledLogoProps extends TypographyProps {
  to?: string;
}

export const LogoLink = styled(Typography)<StyledLogoProps>(({ theme }) => ({
  marginLeft: '20px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '25px',
}));
