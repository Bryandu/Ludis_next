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

const ToastShowTop = keyframes`
  from{height: 0;}
  to{height: 50px;}
`;

const ToastShowBottom = keyframes`
  to{opacity: 1;}
`;

export const ToastContainer = styled.div``;

export const ToastBody = styled.div<ToastI>`
  position: absolute;
  z-index: 1000;
  display: none;
  width: 100%;
  max-height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blackBody};
  overflow: hidden;
  border: solid 1px ${Colors.blackBackground};
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
    css`
      top: 0;
      animation: ${ToastShowTop} 150ms ease-in;
    `};
  ${props =>
    props.bottom &&
    css`
      top: calc(100vh - 50px);
      position: fixed;
      animation: ${ToastShowBottom} 200ms ease-in;
    `}
  ${props =>
    props.show &&
    css`
      display: flex;
    `}
`;
