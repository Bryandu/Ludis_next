import '../../public/fonts.css';
import '../../public/nprogress.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider } from 'next-auth/client';
import Nprogres from 'nprogress';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '../store/store';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

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
        <meta
          name="description"
          content="Encontre lugares e pessoas para jogar, praticar e compartilhar seus esportes e lances favoritos!"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
