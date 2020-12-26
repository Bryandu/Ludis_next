import React from "react";
import Head from "next/head";
import Header from "../components/header/header";
import Anchor from "../components/button/button";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Anchor href="/login">Entrar</Anchor>
      </main>
    </div>
  );
};

export default Home;
