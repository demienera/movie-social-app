import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import { BackButton } from './BackButton';

const meta = {
  title: 'Shared/Buttons/BackButton',
  component: BackButton,
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
} satisfies Meta<typeof BackButton>;

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {};
