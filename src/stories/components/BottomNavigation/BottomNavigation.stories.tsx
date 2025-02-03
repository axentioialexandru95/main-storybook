import type { Meta, StoryObj } from '@storybook/react';
import BottomNavigation from './index';

const meta = {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default props here
  },
}; 