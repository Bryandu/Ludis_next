import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiAlertCircle } from 'react-icons/fi';
import { IoLogoFacebook } from 'react-icons/io';

import { AnchorText } from '../components/anchor/styles';
import FormLogin from '../components/forms/formLogin';
import Logo from '../components/logo/logo';
import Toast from '../components/toast/toast';
import { wrapper } from '../store/store';
import { Colors } from '../styles/global';
import { ContainerHome, HomeContainer, HomeIcons, HomeImg, Main } from '../styles/indexStyles';

const Home = () => {
  const [toast, setToast] = useState<boolean>();

  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ContainerHome>
          <Toast
            hide={() => setToast(false)}
            Icon={FiAlertCircle}
            colorIcon={Colors.redSecundary}
            top
            show={toast}>
            Algo deu errado.
            <br />
            Email ou senha incorretos.
          </Toast>
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

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.getState();
});

export default Home;
