import { useState } from 'react';
import { TextField } from '@mui/material';
import { PasswordToggle } from './PasswordToggle';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Shared/PasswordToggle',
  component: PasswordToggle,
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
} satisfies Meta<typeof PasswordToggle>;
export default meta;

type Story = StoryObj<typeof PasswordToggle>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);

    return (
      <TextField
        type={show ? 'text' : 'password'}
        label="Пароль"
        InputProps={{
          endAdornment: <PasswordToggle show={show} onToggle={() => setShow(prev => !prev)} />,
        }}
      />
    );
  },
};
