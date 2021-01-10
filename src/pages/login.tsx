import { DivForm, SectionLogin, DivPassword } from "../styles/loginStyle";
import FormLogin from "../components/forms/formLogin";
import Link from "next/link";
import { Anchor } from "../components/anchor/styles";

const Login = () => {
  return (
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
  );
};

export default Login;
