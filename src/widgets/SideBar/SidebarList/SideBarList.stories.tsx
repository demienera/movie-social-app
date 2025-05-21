import { SideBarList } from './SideBarList';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FeedIcon from '@mui/icons-material/Feed';
import PersonIcon from '@mui/icons-material/Person';

const items = [
  { label: 'Новое', path: '/new', icon: <AccessTimeIcon /> },
  { label: 'Моя лента', path: '/feed', icon: <FeedIcon /> },
  { label: 'Профиль', path: '/profile', icon: <PersonIcon /> },
];

const meta = {
  title: 'Widgets/SideBarList',
  component: SideBarList,
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
} satisfies Meta<typeof SideBarList>;
export default meta;

type Story = StoryObj<typeof SideBarList>;

export const Default: Story = {
  args: {
    items,
    onClose: () => {},
  },
};
