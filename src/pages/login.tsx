import { DivForm, SectionLogin, DivPassword } from "../styles/loginStyle";
import FormLogin from "../components/forms/formLogin";
import Link from "next/link";
import { A } from "../components/anchor/anchor";

const Login: React.FC = () => {
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
            <A>Esqueceu a senha?</A>
          </Link>
        </DivPassword>
      </article>
    </SectionLogin>
  );
};

export default Login;
