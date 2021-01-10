import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ContainerField, DivButton, Label } from "./styleForms";
import { HiOutlineMail } from "react-icons/hi";
import { BiKey } from "react-icons/bi";
import { CgPassword } from "react-icons/cg";
import { Button } from "../button/button";
import { Input } from "../input/input";

export const FormSingup: React.FC = ({ ...props }) => {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido.").required("Campo obrigatório"),
    password: Yup.string()
      .min(8, "Minimo oite caractéries.")
      .required("Campo obrigatório"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Senhas não são iguais.")
      .required("Campo obrigatório"),
  });

  const onSubmit = (values: {}) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form>
        <ContainerField>
          <Label>Email</Label>
          <Input
            name="email"
            icon={HiOutlineMail}
            height="40px"
            iconSize="25px"
            lineDown
          />
        </ContainerField>
        <ContainerField>
          <Label>Senha</Label>
          <Input
            name="password"
            icon={BiKey}
            iconSize="25px"
            height="40px"
            type="password"
            lineDown
          />
        </ContainerField>
        <ContainerField>
          <Label>Confirmar senha</Label>
          <Input
            name="passwordConfirm"
            icon={CgPassword}
            height="40px"
            iconSize="25px"
            type="password"
            lineDown
          />
        </ContainerField>
        <DivButton center>
          <Button type="submit">Cadastrar</Button>
        </DivButton>
      </Form>
    </Formik>
  );
};
