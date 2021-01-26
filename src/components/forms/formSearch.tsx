import { Form, Formik } from 'formik';
import { BsSearch } from 'react-icons/bs';
import { Input } from '../input/input';

const FormSearch = () => {
  const initialValues = {
    search: ''
  };

  const onSubmit = (values: Record<'search', string>) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form>
          <Input name="search" height="30px" icon={BsSearch} iconColor="#fff" iconSize="20px" />
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
