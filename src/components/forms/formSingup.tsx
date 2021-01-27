import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ContainerField, DivButton, Label } from './styleForms';
import { HiOutlineMail } from 'react-icons/hi';
import { BiKey } from 'react-icons/bi';
import { CgPassword } from 'react-icons/cg';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { useDispatch, useSelector } from 'react-redux';
import { SingUp } from '../../store/ducks/user/userActions';
import { selectorLogin } from '../../store/ducks/user/userSelector';

interface SingUp {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const FormSingup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorLogin);

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
    const { email, password } = values;
    dispatch(SingUp({ email: email, password: password, isOn: true }));
    console.log(user);
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

export default FormSingup;
