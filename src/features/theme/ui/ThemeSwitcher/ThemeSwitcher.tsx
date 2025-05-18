import { useAppDispatch } from '@/app/store/store';
import { Brightness4 } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { toggleTheme } from '../../model/themeSlice';
import { ThemeToggleButton } from './styled';

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Tooltip title="Сменить тему" arrow placement="left">
      <ThemeToggleButton onClick={() => handleTheme()}>
        <Brightness4 />
      </ThemeToggleButton>
    </Tooltip>
  );
};
