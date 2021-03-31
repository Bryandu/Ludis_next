import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { userLogin } from '../../store/ducks/user/userActions';
import { userSelector } from '../../store/ducks/user/userSelectors';
import { Colors } from '../../styles/global';
import Anchor from '../anchor/anchor';
import Button from '../button/button';
import FormLogin, { LoginValues } from '../forms/formLogin';
import Logo from '../logo/logo';
import { Spinner } from '../spinner/spiner';
import Toast from '../toast/toast';
import {
  ContainerHome,
  HomeContainer,
  HomeIcons,
  HomeImg,
  HomeImgTwo,
  Main,
  SingUpLogin,
  SpinnerPosition
} from './styles';

const Login = () => {
  const [toast, setToast] = useState<boolean>();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    user.isOn && localStorage.setItem('token', String(Math.random()));
  }, [user.isOn]);

  const submiting = useCallback(
    (values: LoginValues) => {
      dispatch(userLogin(values.email, values.password));
      setToast(true);
    },
    [dispatch]
  );

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
                <FormLogin submit={submiting}>
                  <Button
                    width="100%"
                    disabled={user.loading || (user.isOn as undefined | boolean)}
                    name="Entrar"
                    type="submit"></Button>
                </FormLogin>
              </div>
              <SingUpLogin>
                Não tem uma conta?&nbsp;
                <Anchor hrefAnchor="/singUp">Cadastre-se aqui.</Anchor>
              </SingUpLogin>
            </HomeImgTwo>
          </HomeContainer>
        </ContainerHome>
      </Main>
      <SpinnerPosition>{user.loading && <Spinner size="26px" />}</SpinnerPosition>
    </div>
  );
};

export default Login;
