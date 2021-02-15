import { ComponentType, HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import styled, { css, keyframes } from 'styled-components';

import { Colors } from '../../styles/global';

export interface ToastI extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  hide?: VoidFunction;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  Icon?: ComponentType<IconBaseProps>;
  colorIcon?: string;
}

const ToastShow = keyframes`
  from{
    width: 0;
    height: 0;
  }
  to{
    width: 300px;
    height: 80px;
  }
`;

export const ToastBody = styled.div<ToastI>`
  position: absolute;
  z-index: 999;
  display: none;
  width: 300px;
  height: 80px;
  border-radius: 6px;
  background-color: ${Colors.blackBody};
  overflow: hidden;
  border: solid 1px ${Colors.blackBackground};
  animation: ${ToastShow} 150ms ease-in-out;
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
      right: 2px;
      top: 2px;
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
    }
  }
  ${props =>
    props.top &&
    css`
      top: 10px;
    `};
  ${props =>
    props.bottom &&
    css`
      bottom: 10px;
    `}
  ${props =>
    props.right &&
    css`
      right: 10px;
    `};
  ${props =>
    props.left &&
    css`
      left: 10px;
    `};
  ${props =>
    props.show &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;
