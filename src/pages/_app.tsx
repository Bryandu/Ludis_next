import Head from 'next/head';
import { useEffect } from 'react';
import Nprogres from 'nprogress';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import store from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
