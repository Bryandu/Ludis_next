import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistedStore } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';
import Nprogres from 'nprogress';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    Nprogres.configure({ showSpinner: false });
    router.events.on('routeChangeStart', () => Nprogres.start());
    router.events.on('routeChangeComplete', () => Nprogres.done());
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="nprogress.css" />
        <meta
          name="description"
          content="Encontre lugares e pessoas para jogar, praticar e compartilhar seus esportes e lances favoritos!"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <Component {...pageProps} />
            <GlobalStyle />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
