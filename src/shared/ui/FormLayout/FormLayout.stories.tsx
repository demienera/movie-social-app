import { Formik } from 'formik';
import { FormLayout } from './FormLayout';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import { FormTextField } from '../FormTextField/FormTextField';
import { AuthSubmitButton } from '@/features/auth/ui/AuthSubmitButton';
import { AuthFormLinks } from '@/features/auth/ui/AuthFormLinks';

const meta = {
  title: 'Shared/Form/FormLayout',
  component: FormLayout,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    footer: {
      control: 'boolean',
      defaultValue: true,
      description: 'Показать футер с ссылками',
    },
  },
  decorators: [
    Story => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
} satisfies Meta<typeof FormLayout>;

export default meta;

type Story = StoryObj<typeof FormLayout>;

export const Default: Story = {
  args: {
    footer: true,
  },
  render: ({ footer }) => (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
      {({ isSubmitting, isValid, dirty }) => (
        <FormLayout
          isSubmitting={isSubmitting || !isValid || !dirty}
          submitButton={
            <AuthSubmitButton text="Войти" disabled={isSubmitting || !isValid || !dirty} />
          }
          footer={footer ? <AuthFormLinks variant="login" /> : null}
        >
          <FormTextField name="email" label="Email" required />
          <FormTextField name="password" label="Пароль" type="password" required />
        </FormLayout>
      )}
    </Formik>
  ),
};
