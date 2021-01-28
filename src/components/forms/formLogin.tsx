import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../button/button';
import { DivButton } from './styleForms';
import Anchor from '../anchor/anchor';
import { Input } from '../input/input';

import { HiOutlineMail } from 'react-icons/hi';
import { BiKey } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/ducks/user/userSelectors';
import { userLogin } from '../../store/ducks/user/user';

const FormLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

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
    password: Yup.string().min(8, 'Minímo oito caractéries.').required('Senha é obrigatório.')
  });

  const onSubmit = (values: Login) => {
    dispatch(userLogin(values.email, values.password));
    console.log(user);
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
