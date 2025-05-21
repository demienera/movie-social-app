import { AuthButton } from './AuthButton';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Shared/AuthButton',
  component: AuthButton,
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
} satisfies Meta<typeof AuthButton>;
export default meta;

type Story = StoryObj<typeof AuthButton>;

export const Default: Story = {};
