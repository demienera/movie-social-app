import { Box, styled, Typography, type TypographyProps } from '@mui/material';
import type { ElementType } from 'react';

interface StyledModalTitleProps extends TypographyProps {
  component?: ElementType;
}

export const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
  minWidth: '250px',
}));

export const ButtonsRow = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const LeftSection = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const RightSection = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const ModalTitle = styled(Typography, {
  shouldForwardProp: prop => prop !== 'component',
})<StyledModalTitleProps>(({ theme }) => ({
  fontSize: '25px',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));
