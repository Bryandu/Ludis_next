import React from 'react';
import Head from 'next/head';
import Header from '../components/header/header';
import Button from '../components/button/button';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Button href="/login">Entrar</Button>
      </main>
    </div>
  );
};

export default Home;
