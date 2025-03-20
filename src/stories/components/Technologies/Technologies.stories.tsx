import type { Meta, StoryObj } from '@storybook/react';
import Technologies from './index';

const meta = {
  title: 'Components/Technologies',
  component: Technologies,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Technologies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
  },
};

export const CustomClass: Story = {
  args: {
    className: 'mt-8',
  },
};
