import React, { useEffect } from "react";
import Nprogres from "nprogress";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    Nprogres.configure({ showSpinner: false });
    router.events.on("routeChangeStart", () => Nprogres.start());
    router.events.on("routeChangeComplete", () => Nprogres.done());
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="nprogress.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
