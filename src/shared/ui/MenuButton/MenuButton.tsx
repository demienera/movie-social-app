import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuButtonProps {
  onClick?: () => void;
  isOpened: boolean;
}

export const MenuButton = ({ onClick, isOpened }: MenuButtonProps) => (
  <IconButton
    onClick={onClick}
    sx={theme => ({
      p: 1,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.custom.buttonHoverBg,
        color: theme.custom.colorAccent,
      },
    })}
  >
    {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
  </IconButton>
);
