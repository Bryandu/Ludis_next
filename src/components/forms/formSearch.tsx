import { Form, Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';

import { Input } from '../input/input';

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
            <Input id="inputsearch" name="search" height="30px" icon={BsSearch} iconSize="20px" />
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
