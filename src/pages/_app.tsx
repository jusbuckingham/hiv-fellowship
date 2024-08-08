import '../styles/globals.css';
import type { AppProps } from 'next/app';
import JusibleLoader from '../components/JusibleLoader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <JusibleLoader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
