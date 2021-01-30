import Head from 'next/head';
import { useEffect } from 'react';

import Anchor from '../components/anchor/anchor';
import FormLogin from '../components/forms/formLogin';
import { DivForm, DivPassword, SectionLogin } from '../styles/loginStyle';

const Login = () => {
  useEffect(() => {
    //GET("users");
  });

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

export default Login;
