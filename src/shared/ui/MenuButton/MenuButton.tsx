import { Tooltip } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuToggleButton } from './styled';

interface MenuButtonProps {
  onClick?: () => void;
  isOpened: boolean;
}

export const MenuButton = ({ onClick, isOpened }: MenuButtonProps) => (
  <Tooltip title="Открыть/скрыть меню" arrow>
    <MenuToggleButton onClick={onClick}>
      {isOpened ? <MenuOpenIcon /> : <MenuIcon />}
    </MenuToggleButton>
  </Tooltip>
);
