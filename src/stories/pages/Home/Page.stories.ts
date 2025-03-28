import type { Meta, StoryObj } from '@storybook/react';
import { Page } from '.';

const meta = {
  title: 'Pages/Home',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
