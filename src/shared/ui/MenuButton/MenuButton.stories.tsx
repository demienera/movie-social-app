import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import { MenuButton } from './MenuButton';

const meta = {
  title: 'Shared/MenuButton',
  component: MenuButton,
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
} satisfies Meta<typeof MenuButton>;

export default meta;

type Story = StoryObj<typeof MenuButton>;

export const Opened: Story = {
  args: { isOpened: true },
  parameters: {
    controls: { disable: true },
  },
  argTypes: {},
};

export const Closed: Story = {
  args: { isOpened: false },
  parameters: {
    controls: { disable: true },
  },
  argTypes: {},
};
