import Head from 'next/head';
import { useState } from 'react';
import { Button } from '../components/button/button';
import Modal from '../components/modal/modal';
import { SectionProfile } from '../styles/profileStyle';

const Profile = () => {
  const [dragdrop, setDragdrop] = useState(false);

  const hiddenModal = () => {
    setDragdrop(false);
    console.log(dragdrop);
  };

  return (
    <>
      <Head>
        <title>Ludis - profile</title>
      </Head>
      <SectionProfile id="profile">
        <Button
          onClick={() => {
            setDragdrop(true);
            console.log(dragdrop);
          }}>
          Modal
        </Button>
      </SectionProfile>
      <Modal showModal={dragdrop} hiddenModal={hiddenModal}>
        <p>hf</p>
      </Modal>
    </>
  );
};

export default Profile;
