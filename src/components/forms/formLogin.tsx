import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import * as Yup from 'yup';

import { AnchorText } from '../anchor/styles';
import { Input } from '../inputs/input';
import { DivButton, Rememberme } from './styleForms';

export type Login = {
  email: string;
  password: string;
};
interface FormLogin extends HTMLAttributes<HTMLDivElement> {
  submit: (values: Login, actions: FormikHelpers<Login>) => void;
}

const FormLogin = forwardRef(
  ({ submit, ...props }: FormLogin, ref: ForwardedRef<FormikProps<Login>>) => {
    const initialValues = {
      email: '',
      password: ''
    };
    const validationSchema = Yup.object().shape({
      email: Yup.string().email('Email inválido.').required('Email obrigatório.'),
      password: Yup.string().min(8, 'Minímo oito caractéries.').required('Senha obrigatório.')
    });

    return (
      <Formik
        innerRef={ref}
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}>
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
  }
);

export default FormLogin;
