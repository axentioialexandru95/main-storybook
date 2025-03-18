import type { Meta, StoryObj } from '@storybook/react';
import Solutions from './index';

const meta = {
  title: 'Components/Solutions',
  component: Solutions,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Solutions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'pt-24',
  },
}; 