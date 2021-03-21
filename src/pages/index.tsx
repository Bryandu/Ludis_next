import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { AnchorText } from '../components/anchor/styles';
import Button from '../components/button/button';
import FormLogin from '../components/forms/formLogin';
import Logo from '../components/logo/logo';
import { Spinner } from '../components/spinner/spiner';
import Toast from '../components/toast/toast';
import { userSelector } from '../store/ducks/user/userSelectors';
import { Colors } from '../styles/global';
import {
  ContainerHome,
  HomeContainer,
  HomeIcons,
  HomeImg,
  HomeImgTwo,
  Main,
  SingUpLogin,
  SpinnerPosition
} from '../styles/indexStyles';

const Home = () => {
  const [toast, setToast] = useState<boolean>();
  const user = useSelector(userSelector);

  return (
    <div>
      <Head>
        <title>Ludis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <ContainerHome>
          <Toast
            hide={() => {
              setToast(false);
            }}
            Icon={FiAlertCircle}
            colorIcon={Colors.redSecundary}
            top
            show={toast && !user.loading && !user.isOn}>
            Email ou senha incorretos.
          </Toast>
          <HomeContainer>
            <HomeImg>
              <h2>
                <span>Conecte-se com amigos,</span>
                <br />
                <span>encontre lugares.</span>
                <br />
                <span>Jogue.</span>
              </h2>
              <Image objectFit="cover" alt="esportes" src="/img/quadra.jpg" layout="fill" />
            </HomeImg>
            <HomeImgTwo>
              <header>
                <Logo fontsize="2.5em">Ludis</Logo>
              </header>
              <div>
                <div>
                  <p>Bem vindo</p>
                  <h2>Faça seu login</h2>
                </div>
                <HomeIcons>
                  <div title="Entrar com Google">
                    <FaGoogle size="1em" />
                  </div>
                  <div title="Entrar com Facebook">
                    <FaFacebookF size="1em" />
                  </div>
                </HomeIcons>
                <div className="line">ou use seu email e senha</div>
                <FormLogin submit={() => setToast(true)}>
                  <Button
                    width="100%"
                    disabled={user.loading || (user.isOn as undefined | boolean)}
                    name="Entrar"
                    type="submit"></Button>
                </FormLogin>
              </div>
              <SingUpLogin>
                Não tem uma aconta?
                <AnchorText>&nbsp;Cadastre-se aqui.</AnchorText>
              </SingUpLogin>
            </HomeImgTwo>
          </HomeContainer>
        </ContainerHome>
      </Main>
      <SpinnerPosition>{user.loading && <Spinner size="26px" />}</SpinnerPosition>
    </div>
  );
};

export default Home;
