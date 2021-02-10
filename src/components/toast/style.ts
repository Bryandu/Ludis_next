import { ReactChild } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Colors } from '../../styles/global';

export interface ToastI {
  show: boolean;
  topRight?: boolean;
  bottomRight?: boolean;
  children: ReactChild;
}

const ToastShow = keyframes`
  from{
    right: 0;
    width: 0px;
  }
  to{
    right: 10px
    width: 300px;
  }
`;

export const ToastBody = styled.div<ToastI>`
  display: none;
  position: absolute;
  z-index: 999;
  width: 300px;
  border-radius: 3px;
  background-color: ${Colors.redSecundary};
  animation: ${ToastShow} 100ms ease-in-out;
  overflow: visible;
  ${props =>
    props.topRight &&
    css`
      top: 15px;
      right: 10px;
    `};
  ${props =>
    props.bottomRight &&
    css`
      bottom: 15px;
      right: 10px;
    `}
  ${props =>
    props.show &&
    css`
      display: flex;
    `};
`;
