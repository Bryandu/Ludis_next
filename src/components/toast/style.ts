import { ComponentType, HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import styled, { css, keyframes } from 'styled-components';

import { Colors } from '../../styles/global';

export interface ToastI extends HTMLAttributes<HTMLDivElement> {
  show: boolean | undefined;
  hide?: VoidFunction;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  Icon?: ComponentType<IconBaseProps>;
  colorIcon?: string;
}

const ToastShow = keyframes`
  from{transform: translateY(-100%);}
  to{transform: translateY(0);}
`;

const ToastHide = keyframes`
  from{transform: translateY(0);}
  to{transform: translateY(-100%);}
`;

export const ToastBody = styled.div<ToastI>`
  position: absolute;
  z-index: 1000;
  display: flex;
  width: 100%;
  max-height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.foreground};
  overflow: hidden;
  border: solid 1px ${Colors.blackBackground};
  animation-name: ${props => (props.show ? ToastShow : ToastHide)};
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  pointer-events: none;
  transition: 200ms opacity;
  top: ${props => (props.top ? 0 : 'calc(100vh - 50px)')};
  opacity: 0;
  & > article {
    display: flex;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 5px;
    justify-content: left;
    align-items: center;
    & > svg {
      display: block;
      position: absolute;
      right: 15px;
      top: calc(50% - 10px);
      transition: 200ms ease-in-out;
      & :hover {
        cursor: pointer;
        color: ${Colors.redPrimary};
      }
    }
    & > aside {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;
      svg {
        width: 30px;
      }
    }
  }
  ${props =>
    props.top &&
    props.show &&
    css`
      top: 0;
      position: fixed;
      pointer-events: all;
      opacity: 1;
    `};
  ${props =>
    props.bottom &&
    props.show &&
    css`
      top: calc(100vh - 50px);
      position: fixed;
      opacity: 1;
      pointer-events: all;
    `}
`;
