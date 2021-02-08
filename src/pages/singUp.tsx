import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FormSingup } from '../components/forms/formSingup';
import Logo from '../components/logo/logo';
import { userSelector } from '../store/ducks/user/userSelectors';
import { UserState } from '../store/ducks/user/userTypes';
import { wrapper } from '../store/store';
import {
  AsideForm,
  DivForm,
  DivImg,
  DivText,
  FormContainer,
  ImgContainer,
  Section
} from '../styles/singupStyles';

const SingUp = () => {
  const user: UserState = useSelector(userSelector);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Head>
        <title>Ludis - cadastro</title>
      </Head>
      <Section>
        <DivForm>
          <AsideForm>
            <Logo fontsize="50px">Ludis</Logo>
            <DivText>
              <p>Cadastre-se no Ludis preenchendo os campos abaixo.</p>
            </DivText>
            <FormContainer>
              <FormSingup />
            </FormContainer>
          </AsideForm>
        </DivForm>
        <DivImg>
          <ImgContainer>
            <Image alt="Campeões" priority layout="fill" src="/svg/winners.svg" />
          </ImgContainer>
        </DivImg>
      </Section>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.getState();
});

export default SingUp;
