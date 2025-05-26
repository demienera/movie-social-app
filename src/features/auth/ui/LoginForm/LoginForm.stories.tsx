import { LoginForm } from './LoginForm';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Features/Auth/LoginForm',
  component: LoginForm,
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
} satisfies Meta<typeof LoginForm>;
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
