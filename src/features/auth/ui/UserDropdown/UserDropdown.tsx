import { useState, type FC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLogout } from '../../hooks/useLogout';
import { Avatar } from '@/shared/ui/Avatar';
import { AvatarMenu } from '@/shared/ui/Avatar/AvatarMenu';
import { IconButton } from '@mui/material';

export const UserDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useAuth();
  const logout = useLogout();

  if (!user) return null;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { content: user.name, disabled: true },
    { content: 'Мой профиль', disabled: false },
    { content: 'Избранное', disabled: false },
    { content: 'Настройки', disabled: false },
    { content: 'Выйти', onClick: logout },
  ];

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
      </IconButton>

      <AvatarMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        items={menuItems}
        onClose={handleClose}
      />
    </>
  );
};
