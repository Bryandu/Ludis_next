import { Form, Formik } from 'formik';
import { signIn } from 'next-auth/client';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

// import { userLogin } from '../../store/ducks/user/userActions';
import Anchor from '../anchor/anchor';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { DivButton } from './styleForms';

type Login = {
  email: string;
  password: string;
};

interface FormLogin {
  click?: VoidFunction;
  submit?: VoidFunction;
}

const FormLogin = ({ click, submit }: FormLogin) => {
  //const dispacth = useDispatch();

  const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
    password: Yup.string().min(8, 'Minímo oito caractéries.').required('Senha obrigatório.')
  });

  const onSubmit = async (values: Login) => {
    const { email, password } = values;
    //dispacth(userLogin(values.email, values.password));
    signIn('credentials', { email, password, callbackUrl: `${window.location.origin}/profile` });
    submit();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <Form style={{ width: '100%', height: '100%' }}>
          <aside>
            <label htmlFor="email">
              Email
              <Input
                name="email"
                icon={HiOutlineMail}
                iconSize="25px"
                height="40px"
                lineDown
                type="email"
                placeholder="Seu email"
              />
            </label>
          </aside>

          <aside>
            <label htmlFor="password">
              Senha
              <Input
                name="password"
                icon={BiKey}
                iconSize="25px"
                height="40px"
                lineDown
                type="password"
                placeholder="Sua senha"
              />
            </label>
          </aside>
          <DivButton>
            <Button onClick={() => click && click()} type="submit">
              Entrar
            </Button>
            <div>
              <Anchor href="/singUp">Ou então faça o seu cadastro aqui.</Anchor>
            </div>
          </DivButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
