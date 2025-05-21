import { Header } from './Header';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Widgets/Header',
  component: Header,
  decorators: [
    Story => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
