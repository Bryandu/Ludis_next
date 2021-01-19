import EventEmitter from "events";
import {
  ChangeEvent,
  ComponentProps,
  ComponentType,
  FunctionComponentElement,
  HTMLAttributes,
  HTMLProps,
  ReactChild,
} from "react";
import { ModalBody, ModalContainer } from "./styles";

interface Modal extends HTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  hiddenModal: Function;
  children?: ReactChild;
}

const Modal = ({ showModal, hiddenModal, children, ...props }: Modal) => {
  const closeModal = e => {
    console.log(e);
    e.id == "modal" ? hiddenModal() : false;
  };

  return (
    <ModalContainer
      showModal={showModal}
      onClick={e => closeModal(e.target)}
      id="modal">
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;
