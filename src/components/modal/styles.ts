import styled, { css, keyframes } from 'styled-components';

import { Colors } from '../../styles/global';

interface ModalStyle {
  showModal?: boolean;
}

const modalshow = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const ModalContainer = styled.div<ModalStyle>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${modalshow} 200ms ease-in-out;
  & :hover {
    cursor: pointer;
  }
  ${props =>
    props.showModal &&
    css`
      display: flex;
    `};
`;

export const ModalBody = styled.article`
  display: flex;
  width: max-content;
  position: absolute;
  background-color: ${Colors.blackBackground};
  box-shadow: 0px 0px 20px 2px rgba (0, 0, 0, 0.7);
  border-radius: 5px;
  overflow-y: auto;
  & :hover {
    cursor: default;
  }
`;
