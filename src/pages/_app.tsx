import '@/styles/globals.css';
import '@fontsource/urbanist';
import type { AppProps } from 'next/app';
import Layout from '@/stories/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
