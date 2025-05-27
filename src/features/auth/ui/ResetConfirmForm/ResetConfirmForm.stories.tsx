import { ResetConfirmForm } from './ResetConfirmForm';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Features/Auth/ResetConfirmForm',
  component: ResetConfirmForm,
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
} satisfies Meta<typeof ResetConfirmForm>;
export default meta;

type Story = StoryObj<typeof ResetConfirmForm>;

export const Default: Story = {};
