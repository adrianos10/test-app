import 'src/app/styles/globals.css';

import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/mainLayout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
