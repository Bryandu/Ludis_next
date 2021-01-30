import Head from 'next/head';
import Image from 'next/image';

import { FormSingup } from '../components/forms/formSingup';
import Logo from '../components/logo/logo';
import {
  AsideForm,
  DivForm,
  DivImg,
  DivText,
  FormContainer,
  ImgContainer,
  Section
} from '../styles/singupStyles';

const singUp = () => {
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
            <Image alt="Campeões" width={400} height={350} src="/svg/winners.svg" />
          </ImgContainer>
        </DivImg>
      </Section>
    </>
  );
};

export default singUp;
