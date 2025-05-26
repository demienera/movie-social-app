import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import { CloseButton } from './CloseButton';

const meta = {
  title: 'Shared/Buttons/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    Story => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {};
