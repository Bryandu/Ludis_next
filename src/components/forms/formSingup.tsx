import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DivInput, InputComp } from "../input/styles";
import { ContainerField, DivButton, Erros, Label } from "./styleForms";
import { HiOutlineMail } from "react-icons/hi";
import { BiKey } from "react-icons/bi";
import { CgPassword } from "react-icons/cg";
import { Button } from "../button/button";

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
          <DivInput>
            <Field name="email" type="email" as={InputComp} />
            <HiOutlineMail size="25px" />
          </DivInput>
          <ErrorMessage component={Erros} name="email" />
          <br />
        </ContainerField>
        <ContainerField>
          <Label>Senha</Label>
          <DivInput>
            <Field name="password" type="password" as={InputComp} />
            <BiKey size="25px" />
          </DivInput>
          <ErrorMessage component={Erros} name="password" />
          <br />
        </ContainerField>
        <ContainerField>
          <Label>Confirmar senha</Label>
          <DivInput>
            <Field name="passwordConfirm" type="password" as={InputComp} />
            <CgPassword size="25px" />
          </DivInput>
          <ErrorMessage component={Erros} name="passwordConfirm" />
          <br />
        </ContainerField>
        <DivButton>
          <Button type="submit">Cadastrar</Button>
        </DivButton>
      </Form>
    </Formik>
  );
};
