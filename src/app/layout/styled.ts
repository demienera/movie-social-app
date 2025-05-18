import { Box, styled } from '@mui/material';

export const LayoutWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
}));

export const MainContent = styled(Box)(() => ({
  flexGrow: 1,
  paddingBlock: '30px',
  paddingInline: '15px',
}));
