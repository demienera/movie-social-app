import { ResetRequestForm } from './ResetRequestForm';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Features/Auth/ResetRequestForm',
  component: ResetRequestForm,
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
} satisfies Meta<typeof ResetRequestForm>;
export default meta;

type Story = StoryObj<typeof ResetRequestForm>;

export const Default: Story = {};
