import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Shared/Avatar/Avatar',
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
