import { DivForm, SectionLogin, DivPassword } from "../styles/loginStyle";
import FormLogin from "../components/forms/formLogin";
import Link from "next/link";
import { Anchor } from "../components/anchor/styles";
import Head from "next/head";
import { useEffect } from "react";
import { GET } from "../service/axios";

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
