import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  type ListItemButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledButtonProps extends ListItemButtonProps {
  active: boolean;
  to?: string;
  onClose?: () => void;
}

export const ItemLink = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'active',
})<StyledButtonProps>(({ theme, active }) => ({
  borderRadius: '7px',
  gap: '17px',
  backgroundColor: active ? theme.custom.colorActive : 'transparent',
  color: theme.palette.text.primary,
  '&:hover': active
    ? {
        backgroundColor: theme.custom.colorActive,
        color: theme.palette.text.primary,
        '& .MuiListItemIcon-root': {
          color: 'inherit',
        },
      }
    : {
        backgroundColor: theme.custom.buttonHoverBg,
        color: theme.custom.accentMain,
        '& .MuiListItemIcon-root': {
          color: theme.custom.accentMain,
        },
      },
}));

export const ItemIcon = styled(ListItemIcon)(() => ({
  minWidth: '20px',
  color: 'inherit',
}));

export const ItemText = styled(ListItemText)({
  minWidth: '116px',
});
