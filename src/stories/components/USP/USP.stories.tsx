import type { Meta, StoryObj } from '@storybook/react';
import USP from './index';

const meta = {
  title: 'Components/USP',
  component: USP,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A section highlighting the Unique Selling Propositions of PhantomTech with animated cards and custom icons.',
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
} satisfies Meta<typeof USP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default representation of the USP component with three value proposition cards.',
      },
    },
  },
};
