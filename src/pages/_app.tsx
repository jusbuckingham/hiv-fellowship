import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Accessibility from '../components/Accessibility';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the Head component with the viewport meta tag */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Add the Accessibility component */}
      <Accessibility />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
