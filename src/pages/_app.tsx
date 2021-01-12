import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => Nprogress.start());
    router.events.on("routeChangeComplete", () => Nprogress.done());
    router.events.on("routeChangeError", () => Nprogress.remove());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
