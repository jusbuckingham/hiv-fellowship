import { useEffect } from 'react';

const JusibleLoader = () => {
  useEffect(() => {
    console.log('Loading Jusible script');
    const script = document.createElement('script');
    script.src = 'https://jusible.vercel.app/jusible.js';
    script.defer = true;
    script.onload = () => {
      console.log('Jusible script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load Jusible script');
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default JusibleLoader;
