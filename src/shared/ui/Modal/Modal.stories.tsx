import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Providers } from '@/app/providers/Providers';
import { BaseModal } from './Modal';

const meta: Meta<typeof BaseModal> = {
  title: 'Shared/BaseModal',
  component: BaseModal,
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
  argTypes: {
    title: { control: 'text' },
    showBack: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'text' },
    onClose: {},
  },
};

export default meta;

type Story = StoryObj<typeof BaseModal>;

export const Default: Story = {
  render: args => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button onClick={() => setOpen(true)}>Открыть модал</button>
        <BaseModal {...args} open={open} onClose={() => {}}>
          <div style={{ padding: '10px 0', textAlign: 'center' }}>Контент модального окна</div>
        </BaseModal>
      </>
    );
  },
  args: {
    title: 'Заголовок модального окна',
    showBack: true,
    width: 500,
    height: 'auto',
  },
};
