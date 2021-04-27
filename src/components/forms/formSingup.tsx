import { Form, Formik } from 'formik';
import { AiOutlineUser } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { CgPassword } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { userSingup } from '../../store/ducks/user/userActions';
import Button from '../button/button';
import { Input } from '../inputs/input';
import { ContainerField, DivButton, Label } from './styleForms';

type SingUp = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

interface FormSingup {
  click?: VoidFunction;
  submit?: VoidFunction;
}

export const FormSingup = ({ click, submit }: FormSingup) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'O nome é muito pequeno.').required('Campo obrigatório'),
    email: Yup.string().email('Email inválido.').required('Campo obrigatório'),
    password: Yup.string().min(8, 'Mínimo oito caracteres.').required('Campo obrigatório'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.')
      .required('Campo obrigatório')
  });

  const onSubmit = (values: SingUp) => {
    const { name, email, password } = values;
    dispatch(userSingup(name, email, password));
    return submit && submit();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {() => (
          <Form>
            <ContainerField>
              <Label>
                Nome
                <Input name="name" icon={AiOutlineUser} height="40px" iconSize="25px" lineDown />
              </Label>
            </ContainerField>
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
              <Button name="Cadastrar" onClick={() => click && click()} type="submit" />
            </DivButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormSingup;
