import { useState } from 'react';
import { BiImage, BiPlus, BiVideo } from 'react-icons/bi';

import Modal from '../modal/modal';
import { NewpostContainer, PostTypes } from './styles';

const NewPost = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <NewpostContainer>
        <Modal showModal={modal} hiddenModal={() => setModal(!modal)}>
          <p>{modal ? 'svdsvsvsvsv' : 'k'}</p>
        </Modal>
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
