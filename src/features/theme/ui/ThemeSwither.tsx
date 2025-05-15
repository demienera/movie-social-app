import { useAppDispatch } from '@/app/store/store';
import { Brightness4 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { toggleTheme } from '../model/themeSlice';

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <IconButton
      onClick={() => handleTheme()}
      sx={theme => ({
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor: '#2A2A2A',
          color: theme.custom.colorAccent,
        },
      })}
    >
      <Brightness4 />
    </IconButton>
  );
};
