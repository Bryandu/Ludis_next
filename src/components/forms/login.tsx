import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { InputComp } from "../input/styles";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8, "Minímo oito caractéries.").required(),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => (
        <Form>
          <div>
            <Field name="email"></Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
