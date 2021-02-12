import Head from 'next/head';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';

import { AnchorText } from '../components/anchor/styles';
import FormLogin from '../components/forms/formLogin';
import Logo from '../components/logo/logo';
import { ContainerHome, HomeContainer, HomeIcons, HomeImg, Main } from '../styles/indexStyles';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ContainerHome>
          <header>
            <Logo fontsize="2.5em">Ludis</Logo>
          </header>
          <HomeContainer>
            <HomeImg>
              <h2>
                <span>Conecte-se&nbsp;</span>com seus&nbsp;<span>amigos,&nbsp;</span>encontre
                <span>&nbsp;lugares</span>&nbsp;e bora jogar!
              </h2>
              <div>
                <Image alt="time" src="/svg/team.svg" layout="fill" />
              </div>
            </HomeImg>
            <HomeImg>
              <div>
                <h3>Faça seu login</h3>
                <HomeIcons>
                  <div>
                    <FcGoogle size="1.5em" />
                    Google
                  </div>
                  <div>
                    <IoLogoFacebook size="1.5em" />
                    Facebook
                  </div>
                </HomeIcons>
                <div className="line">
                  <span></span>
                  <p>Ou</p>
                  <span></span>
                </div>
                <FormLogin />
                <aside>
                  <AnchorText href="/">Esqueceu a senha?</AnchorText>
                </aside>
              </div>
            </HomeImg>
          </HomeContainer>
        </ContainerHome>
      </Main>
    </div>
  );
};

export default Home;
