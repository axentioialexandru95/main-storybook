import type { Meta, StoryObj } from '@storybook/react';
import Test from './index';

const meta = {
  title: 'Components/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default props here
  },
}; 