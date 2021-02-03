import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Anchor from '../components/anchor/anchor';
import FormLogin from '../components/forms/formLogin';
import { userSelector } from '../store/ducks/user/userSelectors';
import { wrapper } from '../store/store';
import { DivForm, DivPassword, SectionLogin } from '../styles/loginStyle';

const Login = () => {
  const { email } = useSelector(userSelector);
  const router = useRouter();

  useEffect(() => {
    null;
  }, [email, router]);

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

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.getState();
  return {
    props: {}
  };
});

export default Login;
