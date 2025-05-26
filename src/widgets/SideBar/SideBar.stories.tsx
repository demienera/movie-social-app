import { SideBar } from './SideBar';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Widgets/SideBar/Sidebar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof SideBar>;
export default meta;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    isOpened: true,
    topOffset: 0,
    topOffsetMobile: 0,
  },
};
