import '@/styles/globals.css';
import '@fontsource/urbanist';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/providers/theme-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
