import Head from "next/head";
import Image from "next/image";
import { ContainerHome, HeaderHome, Img, Main } from "../styles/indexStyles";
import Logo from "../components/logo/logo";
import { Button } from "../components/button/button";
import Anchor from "../components/anchor/anchor";

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
                {/* <div>
                  <Image src="/img/eu.jpg" width={30} height={30} alt="profile" />
                </div> */}
                <Button outline>Entrar</Button>
                <Anchor href="/">cadastrar</Anchor>
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
