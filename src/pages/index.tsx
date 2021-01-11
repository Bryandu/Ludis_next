import React from "react";
import Head from "next/head";
import Header from "../components/header/header";
import Anchor from "../components/anchor/anchor";
import { Main } from "../styles/indexStyles";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        <Anchor href="/login">Entrar</Anchor>
      </Main>
    </div>
  );
};

export default Home;
