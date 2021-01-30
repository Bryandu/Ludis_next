import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { BiKey } from 'react-icons/bi';
import { CgPassword } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import * as Yup from 'yup';

import { POST } from '../../service/axios';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { ContainerField, DivButton, Label } from './styleForms';

export const FormSingup = () => {
  const route = useRouter();

  type SingUp = {
    email: string;
    password: string;
    passwordConfirm: string;
  };

  const initialValues = {
    email: '',
    password: '',
    passwordConfirm: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido.').required('Campo obrigatório'),
    password: Yup.string().min(8, 'Minimo oite caractéries.').required('Campo obrigatório'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
      .required('Campo obrigatório')
  });

  const onSubmit = (values: SingUp) => {
    POST('users', { email: values.email, password: values.password }).then(response => {
      console.log(response);
      response.status == 201 ? route.back() : false;
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <ContainerField>
          <Label>
            Email
            <Input name="email" icon={HiOutlineMail} height="40px" iconSize="25px" lineDown />
          </Label>
        </ContainerField>
        <ContainerField>
          <Label>
            Senha
            <Input
              name="password"
              icon={BiKey}
              iconSize="25px"
              height="40px"
              type="password"
              lineDown
            />
          </Label>
        </ContainerField>
        <ContainerField>
          <Label>
            Confirmar senha
            <Input
              name="passwordConfirm"
              icon={CgPassword}
              height="40px"
              iconSize="25px"
              type="password"
              lineDown
            />
          </Label>
        </ContainerField>
        <DivButton center>
          <Button type="submit">Cadastrar</Button>
        </DivButton>
      </Form>
    </Formik>
  );
};
