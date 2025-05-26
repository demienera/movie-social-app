import type { Meta, StoryObj } from '@storybook/react';
import { PromptLink } from './PromptLink';
import { Providers } from '@/app/providers/Providers';

const meta = {
  title: 'Shared/PromptLink',
  component: PromptLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
    linkText: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    Story => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof PromptLink>;

export default meta;

type Story = StoryObj<typeof PromptLink>;

export const Default: Story = {
  args: {
    text: 'Нет аккаунта?',
    linkText: 'Зарегистрироваться',
  },
};
