import Head from 'next/head';

import Anchor from '../components/anchor/anchor';
import FormLogin from '../components/forms/formLogin';
import { storeWrapper } from '../store/store';
import { DivForm, DivPassword, SectionLogin } from '../styles/loginStyle';

const Login = () => {
  return (
    <>
      <Head>
        <title>Ludis - login</title>
      </Head>
      <SectionLogin>
        <article>
          <h1>
            Conecte<span>.&nbsp;</span>Jogue<span>.</span>
            Compartilhe
          </h1>
          <DivForm>
            <FormLogin />
          </DivForm>
          <DivPassword>
            <Anchor href="/">Esqueceu a senha?</Anchor>
          </DivPassword>
        </article>
      </SectionLogin>
    </>
  );
};

export const getStaticsProps = storeWrapper.getStaticProps(async ({ store }) => {
  store.getState();
});

export default Login;
