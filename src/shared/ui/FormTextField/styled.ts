import { styled, TextField } from '@mui/material';

export const StyledFormTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    fontSize: '15px',
    color: theme.palette.text.primary,
  },
  '& label.Mui-focused': {
    color: theme.custom.accentMain,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    '&:hover': {
      backgroundColor: theme.custom.colorActive,
    },
    '& fieldset': {
      borderColor: theme.custom.colorActive,
      borderWidth: 2,
    },
    '&:hover fieldset': {
      borderColor: theme.custom.colorActive,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.custom.accentMain,
      borderWidth: 2,
    },
  },
}));
