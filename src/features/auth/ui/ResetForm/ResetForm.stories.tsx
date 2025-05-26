import { ResetForm } from './ResetForm';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Features/Auth/ResetForm',
  component: ResetForm,
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
} satisfies Meta<typeof ResetForm>;
export default meta;

type Story = StoryObj<typeof ResetForm>;

export const Default: Story = {};
