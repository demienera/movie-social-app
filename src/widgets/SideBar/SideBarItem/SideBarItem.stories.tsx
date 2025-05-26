import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { SideBarItem } from './SideBarItem';

const meta = {
  title: 'Widgets/SideBar/SideBarItem',
  component: SideBarItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SideBarItem>;

export default meta;

type Story = StoryObj<typeof SideBarItem>;

export const Default: Story = {
  decorators: [
    Story => (
      <Providers initialEntries={['/mock']}>
        <Story />
      </Providers>
    ),
  ],
  args: {
    label: 'Новое',
    path: '#',
    icon: <AccessTimeIcon />,
    onClose: () => {},
  },
};

export const Active: Story = {
  decorators: [
    Story => (
      <Providers initialEntries={['/new']}>
        <Story />
      </Providers>
    ),
  ],
  args: {
    label: 'Новое',
    path: '/new',
    icon: <AccessTimeIcon />,
    onClose: () => {},
  },
};
