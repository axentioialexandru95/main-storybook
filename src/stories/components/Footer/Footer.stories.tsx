import type { Meta, StoryObj } from '@storybook/react';
import Footer from './index';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Website footer with logo, social links, navigation menu, and copyright information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default representation of the footer with all elements and animations.',
      },
    },
  },
};
