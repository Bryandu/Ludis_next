import styled, { css } from 'styled-components';

import { Colors } from '../../styles/global';

interface ModalStyle {
  showModal?: boolean;
}

export const ModalContainer = styled.div<ModalStyle>`
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  ${props =>
    props.showModal &&
    css`
      display: flex;
    `}
`;

export const ModalBody = styled.article`
  display: flex;
  width: max-content;
  position: absolute;
  z-index: 100;
  background-color: ${Colors.blackBackground};
  box-shadow: 0px 0px 20px 2px rgba (0, 0, 0, 0.7);
`;
