import Head from 'next/head';
import { useState } from 'react';

import { Button } from '../components/button/button';
import Header from '../components/header/header';
import { SectionProfile } from '../styles/profileStyle';

const Profile = () => {
  const [dragdrop, setDragdrop] = useState(false);

  return (
    <>
      <Head>
        <title>Ludis - profile</title>
      </Head>
      <Header />
      <SectionProfile id="profile">
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
