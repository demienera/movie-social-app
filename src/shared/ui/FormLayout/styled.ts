import { Box, styled } from '@mui/material';
import { Form } from 'formik';

export const StyledForm = styled(Form)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const FormContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '300px',
}));
