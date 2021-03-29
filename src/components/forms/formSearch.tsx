import { Form, Formik } from 'formik';

const FormSearch = () => {
  const initialValues = {
    search: ''
  };

  const onSubmit = (values: Record<string, unknown>) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <label htmlFor="inputsearch">
            <input placeholder="lugares, pessoas, lojas..." id="inputsearch" name="search" />
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
