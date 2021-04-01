import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { FormSingup } from '../components/forms/formSingup';
import Logo from '../components/logo/logo';
import Toast from '../components/toast/toast';
import { userSelector } from '../store/ducks/user/userSelectors';
import { Colors } from '../styles/global';
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
  const user = useSelector(userSelector);
  const [toast, setToast] = useState<boolean>();

  return (
    <>
      <Head>
        <title>Ludis - cadastro</title>
      </Head>
      <Section>
        <Toast
          Icon={FiAlertCircle}
          colorIcon={Colors.redSecundary}
          hide={() => setToast(false)}
          top
          show={toast && !user.isActive}>
          Não foi possível realizar o seu cadastro.
        </Toast>
        <DivForm>
          <AsideForm>
            <Logo fontsize="50px">Ludis</Logo>
            <DivText>
              <p>Cadastre-se no Ludis preenchendo os campos abaixo.</p>
            </DivText>
            <FormContainer>
              <FormSingup submit={() => console.log('submited')} />
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

export default SingUp;
