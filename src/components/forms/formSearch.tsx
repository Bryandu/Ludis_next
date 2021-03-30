import { Field, Form, Formik } from 'formik';

const FormSearch = () => {
  const initialValues = {
    search: ''
  };

  const onSubmit = (values: typeof initialValues) => {
    console.log(values.search);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <label htmlFor="inputsearch">
            <Field
              placeholder="lugares, pessoas, lojas..."
              type="text"
              id="inputsearch"
              name="search"
            />
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
