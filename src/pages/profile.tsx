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
        <Button name="s" />
      </SectionProfile>
    </>
  );
};

export default Profile;
