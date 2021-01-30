import { Form, Formik } from 'formik';
import Link from 'next/link';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import * as Yup from 'yup';

import { Anchor } from '../anchor/styles';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { DivButton } from './styleForms';

const FormLogin = () => {
  type Login = {
    email: string;
    password: string;
  };

  const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
    password: Yup.string().min(8, 'Minímo oito caractéries.').required('Senha obrigatório.')
  });

  const onSubmit = (values: Login) => {
    console.log(values);
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
            <Link href="/singUp">
              <Anchor>ou cadastre-se</Anchor>
            </Link>
          </DivButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
