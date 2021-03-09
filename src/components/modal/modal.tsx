import { HTMLAttributes, ReactChild, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalBody, ModalContainer } from './styles';

interface Modal extends HTMLAttributes<HTMLDivElement> {
  showModal?: boolean;
  hiddenModal: VoidFunction;
  children?: ReactChild;
}

const Modal = ({ showModal, hiddenModal, children }: Modal) => {
  const [isWindow, setWindow] = useState(false);
  const divmodal = document.getElementById('modal-root');

  useEffect(() => {
    setWindow(true);
  }, []);
  const closeModal = (e: unknown) => {
    (e as HTMLDivElement).id === 'modal' ? hiddenModal() : false;
  };

  const modal = showModal ? (
    <ModalContainer showModal={showModal} onClick={e => closeModal(e.target)} id="modal">
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  ) : null;

  if (isWindow && divmodal) {
    return createPortal(modal, divmodal);
  } else {
    return null;
  }
};

export default Modal;
