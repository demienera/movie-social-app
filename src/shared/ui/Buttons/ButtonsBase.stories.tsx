import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBase } from './ButtonBase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Shared/Buttons/ButtonBase',
  component: ButtonBase,
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
} satisfies Meta<typeof ButtonBase>;

export default meta;

type Story = StoryObj<typeof ButtonBase>;

export const Primary: Story = {
  args: {
    variantType: 'primary',
    children: 'Войти',
    onClick: () => alert('Primary button clicked'),
  },
};

export const Icon: Story = {
  args: {
    variantType: 'icon',
    children: <ArrowBackIcon />,
    onClick: () => alert('Icon button clicked'),
  },
};
