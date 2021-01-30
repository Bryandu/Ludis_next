import { HTMLAttributes, ReactChild } from 'react';

import { ModalBody, ModalContainer } from './styles';

interface Modal extends HTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  hiddenModal: VoidFunction;
  children?: ReactChild;
}

const Modal = ({ showModal, hiddenModal, children }: Modal) => {
  const closeModal = e => {
    console.log(e);
    e.id == 'modal' ? hiddenModal() : false;
  };

  return (
    <ModalContainer showModal={showModal} onClick={e => closeModal(e.target)} id="modal">
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;
