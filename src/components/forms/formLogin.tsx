import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { HTMLAttributes, useEffect } from 'react';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { loadingAction } from '../../store/ducks/genericActions';
import { userLogin } from '../../store/ducks/user/userActions';
import { userSelector } from '../../store/ducks/user/userSelectors';
import { AnchorText } from '../anchor/styles';
import { Input } from '../input/input';
import { DivButton, Rememberme } from './styleForms';

type Login = {
  email: string;
  password: string;
};

interface FormLogin extends HTMLAttributes<HTMLDivElement> {
  submit?: VoidFunction;
}

const FormLogin = ({ submit, ...props }: FormLogin) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const route = useRouter();

  useEffect(() => {
    if (user.isOn) {
      route.push('/timeline');
    }
  }, [user, route]);

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
    dispatch(loadingAction());
    dispatch(userLogin(email, password));
    return submit && submit();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <Form style={{ width: '100%' }}>
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
          <Rememberme>
            <div>
              <label>
                <input type="checkbox" name="remenber" />
                &nbsp;lembre-me
              </label>
            </div>
            <AnchorText>Esqueceu a senha?</AnchorText>
          </Rememberme>
          <DivButton>{props.children}</DivButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
