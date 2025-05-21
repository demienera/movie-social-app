import { Logo } from './Logo';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Shared/Logo',
  component: Logo,
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
} satisfies Meta<typeof Logo>;
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
