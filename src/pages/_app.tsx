import '../../public/fonts.css';
import '../../public/nprogress.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Nprogres from 'nprogress';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { storeWrapper } from '../store/store';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [themeuser, setThemeuser] = useState(theme.dark);

  const setTheme = () => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      localTheme === 'dark' ? setThemeuser(theme.dark) : setThemeuser(theme.light);
    } else {
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    Nprogres.configure({ showSpinner: false });
    router.events.on('routeChangeStart', () => Nprogres.start());
    router.events.on('routeChangeComplete', () => Nprogres.done());
    setTheme();
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Encontre lugares e pessoas para jogar, praticar e compartilhar seus esportes e lances favoritos!"
        />
      </Head>
      <ThemeProvider theme={themeuser}>
        <React.StrictMode>
          <GlobalStyle />
          <Component {...pageProps} />
        </React.StrictMode>
      </ThemeProvider>
    </>
  );
};

export default storeWrapper.withRedux(MyApp);
