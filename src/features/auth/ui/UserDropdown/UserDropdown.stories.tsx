import type { Meta, StoryObj } from '@storybook/react';
import { useState, type FC } from 'react';
import { IconButton } from '@mui/material';
import { Avatar } from '@/shared/ui/Avatar';
import { AvatarMenu } from '@/shared/ui/Avatar/AvatarMenu';
import React from 'react';
import { Providers } from '@/app/providers/Providers';

const useAuthMock = () => ({
  user: {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
  },
});

const useLogoutMock = () => () => alert('Вышли из системы');

const UserDropdownWithMocks: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useAuthMock();
  const logout = useLogoutMock();

  if (!user) return null;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { content: user.name, disabled: true },
    { content: user.email, disabled: true },
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

const meta = {
  title: 'Features/Auth/UserDropdown',
  component: UserDropdownWithMocks,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof UserDropdownWithMocks>;

export default meta;

type Story = StoryObj<typeof UserDropdownWithMocks>;

export const Default: Story = {};
