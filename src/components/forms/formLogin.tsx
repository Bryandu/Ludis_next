import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MdEmail, MdVpnKey } from "react-icons/md";
import { InputComp, DivInput } from "../input/input";
import { Button } from "../button/button";
import { DivButton, Erros } from "./styleForms";
import { A } from "../anchor/anchor";
import Link from "next/link";

const FormLogin: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido.").required("Email obrigatório."),
    password: Yup.string()
      .min(8, "Minímo oito caractéries.")
      .required("Senha obrigatório."),
  });

  const onSubmit = (values: {}) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => (
        <Form>
          <aside>
            <label htmlFor="email">Email</label>
            <DivInput>
              <Field
                name="email"
                type="email"
                as={InputComp}
                placeholder="Seu email"
              />
              <MdEmail size="25px" />
            </DivInput>
            <ErrorMessage component={Erros} name="email" />
            <br />
          </aside>
          <aside>
            <label htmlFor="password">Senha</label>
            <DivInput>
              <Field
                name="password"
                as={InputComp}
                type="password"
                placeholder="Sua senha"
              />
              <MdVpnKey size="25px" />
            </DivInput>
            <ErrorMessage component={Erros} name="password" />
            <br />
          </aside>
          <DivButton>
            <Button type="submit">Entrar</Button>
            <Link href="/">
              <A>ou cadastre-se</A>
            </Link>
          </DivButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
