import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { HiOutlineMail } from "react-icons/hi";
import { BiKey } from "react-icons/bi";
import { Button } from "../button/button";
import { DivButton } from "./styleForms";
import { Anchor } from "../anchor/styles";
import Link from "next/link";
import { Input } from "../input/input";

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

  const onSubmit = (values: object) => {
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
            <Input
              name="email"
              icon={HiOutlineMail}
              iconSize="25px"
              height="40px"
              lineDown
              placeholder="Seu email"
            />
          </aside>
          <aside>
            <label htmlFor="password">Senha</label>
            <Input
              name="password"
              icon={BiKey}
              iconSize="25px"
              height="40px"
              lineDown
              placeholder="Sua senha"
            />
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
