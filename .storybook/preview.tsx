import '../src/styles/globals.css';
import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

export default preview;
