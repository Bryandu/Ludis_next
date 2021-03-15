import Head from 'next/head';

import Button from '../components/button/button';
import Header from '../components/header/header';
import { SectionProfile } from '../styles/profileStyle';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Ludis - profile</title>
      </Head>
      <Header />
      <SectionProfile id="profile">
        <Button>s</Button>
      </SectionProfile>
    </>
  );
};

export default Profile;
