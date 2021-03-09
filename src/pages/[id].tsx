import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/header/header';
import withAuth from '../HOC/auth/withAuth';
import { GET } from '../service/axios';
import { userSelector } from '../store/ducks/user/userSelectors';
import { UserData } from '../store/ducks/user/userTypes';
import { wrapper } from '../store/store';

const Home = () => {
  const user = useSelector(userSelector);
  const route = useRouter();

  useEffect(() => {
    console.log(user);
  }, [user, route]);

  if (route.isFallback) {
    return <h1>...Carregando</h1>;
  }

  return (
    <>
      <Header />
    </>
  );
};

export default withAuth(Home);

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const state = store.getState();

  await new Promise(res => setTimeout(res, 4000));

  return {
    props: {
      state
    }
  };
});

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await GET<[]>('/user')
    .then(res => {
      return res?.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  const paths = response.data.map((user: UserData) => {
    return { params: { id: String(user.id) } };
  });

  return {
    paths,
    fallback: false
  };
};
