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
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: ${modalshow} 100ms ease-in-out;
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
  z-index: 1000;
  background-color: ${Colors.blackBackground};
  box-shadow: 0px 0px 20px 2px rgba (0, 0, 0, 0.7);
  & :hover {
    cursor: default;
  }
`;
