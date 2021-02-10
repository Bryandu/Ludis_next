import Head from 'next/head';
import Link from 'next/link';

import Anchor from '../components/anchor/anchor';
import { Button } from '../components/button/button';
import Logo from '../components/logo/logo';
import { ContainerHome, HeaderHome, Img, Main } from '../styles/indexStyles';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ContainerHome>
          <Img>
            <HeaderHome>
              <div>
                <Link href="/login">
                  <Button curve outline>
                    Entrar
                  </Button>
                </Link>
                <Anchor href="/singUp">cadastrar</Anchor>
              </div>
            </HeaderHome>
            <div className="title">
              <Logo fontsize="6em">Ludis,</Logo>
              <p>seu lugar de jogar.</p>
            </div>
          </Img>
        </ContainerHome>
      </Main>
    </div>
  );
};

export default Home;
