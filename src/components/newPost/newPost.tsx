import { useState } from 'react';
import { BiImage, BiPlus, BiVideo, BiX } from 'react-icons/bi';

import Modal from '../modal/modal';
import { NewpostContainer, PostTypes, SetPost, SetPostHeader } from './styles';

const NewPost = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal showModal={modal} hiddenModal={() => setModal(!modal)}>
        <SetPost>
          <SetPostHeader>
            <h1>Nova publicação</h1>
            <BiX onClick={() => setModal(!modal)} size="24px" />
          </SetPostHeader>
        </SetPost>
      </Modal>
      <NewpostContainer>
        <p>Nova publicação</p>
        <PostTypes>
          <div>
            <BiImage />
          </div>
          <span></span>
          <div aria-hidden="true" onClick={() => setModal(true)}>
            <BiPlus />
          </div>
          <span></span>
          <div>
            <BiVideo />
          </div>
        </PostTypes>
      </NewpostContainer>
    </>
  );
};

export default NewPost;
