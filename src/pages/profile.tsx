import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useState } from 'react';

import { Button } from '../components/button/button';
import Header from '../components/header/header';
import { wrapper } from '../store/store';
import { SectionProfile } from '../styles/profileStyle';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.getState();
});

const Profile = () => {
  const [session, loading] = useSession();
  const [dragdrop, setDragdrop] = useState(false);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <>
      <Head>
        <title>Ludis - profile</title>
      </Head>
      <Header />
      <SectionProfile id="profile">
        {session ? <p>bj</p> : <p>asas</p>}
        <Button
          onClick={() => {
            setDragdrop(!dragdrop);
          }}>
          Modal
        </Button>
      </SectionProfile>
    </>
  );
};

export default Profile;
