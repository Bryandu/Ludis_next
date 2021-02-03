import { Form, Formik } from 'formik';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { userLogin } from '../../store/ducks/user/userActions';
import Anchor from '../anchor/anchor';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { DivButton } from './styleForms';

type Login = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const dispacth = useDispatch();

  const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
    password: Yup.string().min(8, 'Minímo oito caractéries.').required('Senha obrigatório.')
  });

  const onSubmit = (values: Login) => {
    dispacth(userLogin(values.email));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <Form>
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
            <Button type="submit">Entrar</Button>
            <Anchor href="/singUp">ou cadastre-se</Anchor>
          </DivButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
