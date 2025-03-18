import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './index';
import { ThemeProvider } from '../../context/ThemeContext';

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => (
    <ThemeProvider>
      <div className="p-8">
        <Story />
      </div>
    </ThemeProvider>
  )],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
  },
};

export const DarkMode: Story = {
  args: {
    className: '',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [(Story) => (
    <div className="dark">
      <Story />
    </div>
  )],
};

export const LightMode: Story = {
  args: {
    className: '',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [(Story) => (
    <div className="light">
      <Story />
    </div>
  )],
}; 