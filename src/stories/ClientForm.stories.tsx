import type { Meta, StoryObj } from '@storybook/react';
import ClientForm from '../components/ClientForm/ClientForm';

const meta = {
  title: 'Components/ClientForm',
  component: ClientForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClientForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    onSubmit: (data) => console.log('Form submitted:', data),
  },
};
