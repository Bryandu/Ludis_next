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
  const [modalroot, setModalroot] = useState<HTMLElement | null>();

  useEffect(() => {
    const scrollbody = document.body;
    showModal ? (scrollbody.style.overflow = 'hidden') : (scrollbody.style.overflow = 'auto');
    setModalroot(document.getElementById('modal-root'));
    setWindow(true);
  }, [showModal]);

  function closeModal(e: EventTarget) {
    (e as HTMLDivElement).id === 'modal' ? hiddenModal() : false;
  }

  const modal = showModal && (
    <ModalContainer showModal={showModal} onClick={e => closeModal(e.target)} id="modal">
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );

  if (isWindow && modalroot) {
    return createPortal(modal, modalroot);
  } else {
    return null;
  }
};

export default Modal;
