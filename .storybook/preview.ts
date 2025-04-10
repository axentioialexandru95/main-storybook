import '../src/styles/globals.css';
import '@fontsource/urbanist';
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
    (Story) => React.createElement('div', { className: 'dark font-sans' }, React.createElement(Story, null)),
  ],
};

export default preview;
