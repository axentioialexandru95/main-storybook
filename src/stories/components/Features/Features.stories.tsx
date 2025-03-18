import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Features from './index';

const meta: Meta<typeof Features> = {
  title: 'Components/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Features>;

export const Default: Story = {
  args: {},
}; 