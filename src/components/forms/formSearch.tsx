import { Field, Form, Formik } from "formik";
import { BsSearch } from "react-icons/bs";
import { DivInput, InputComp } from "../input/styles";

const FormSearch = () => {
  const initialValues = {
    search: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <DivInput height="30px">
            <Field name="search" type="text" as={InputComp} />
            <BsSearch size="20px" />
          </DivInput>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
