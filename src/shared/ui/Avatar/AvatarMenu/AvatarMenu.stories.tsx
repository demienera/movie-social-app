import type { Meta, StoryObj } from '@storybook/react';
import { AvatarMenu } from './AvatarMenu';
import { Providers } from '@/app/providers/Providers';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Avatar } from '../Avatar';

const meta = {
  title: 'Shared/Avatar/AvatarMenu',
  component: AvatarMenu,
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
} satisfies Meta<typeof AvatarMenu>;

export default meta;

type Story = StoryObj<typeof AvatarMenu>;

export const Default: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const items = [
      {
        content: 'Профиль',
        onClick: () => alert('Профиль'),
      },
      {
        content: 'Настройки',
        onClick: () => alert('Настройки'),
      },
      {
        content: 'Выйти',
        onClick: () => alert('Выход'),
        disabled: false,
      },
      {
        content: 'Заблокировано',
        disabled: true,
      },
    ];

    return (
      <>
        <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
          <Avatar />
        </IconButton>
        <AvatarMenu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          items={items}
        />
      </>
    );
  },
};
