import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

import { Anchor } from '../components/anchor/styles';
import FormLogin from '../components/forms/formLogin';
import { GET } from '../service/axios';
import { DivForm, DivPassword, SectionLogin } from '../styles/loginStyle';

const Login = () => {
  useEffect(() => {
    GET('users');
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
            Compartilher
          </h1>
          <DivForm>
            <FormLogin />
          </DivForm>
          <DivPassword>
            <Link href="/">
              <Anchor>Esqueceu a senha?</Anchor>
            </Link>
          </DivPassword>
        </article>
      </SectionLogin>
    </>
  );
};

export default Login;
