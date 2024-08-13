import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Accessibility from '../components/Accessibility';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Remove the external script and add the Accessibility component */}
      <Accessibility />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
