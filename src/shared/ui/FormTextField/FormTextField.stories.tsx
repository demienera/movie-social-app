import { FormTextField } from './FormTextField';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '@/app/providers/Providers';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const meta = {
  title: 'Shared/Form/FormTextField',
  component: FormTextField,
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
} satisfies Meta<typeof FormTextField>;
export default meta;

type Story = StoryObj<typeof FormTextField>;

export const Default: Story = {
  render: () => (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Неверный email').required('Обязательное поле'),
      })}
      onSubmit={() => {}}
    >
      <Form>
        <FormTextField name="email" label="Email" />
      </Form>
    </Formik>
  ),
};
