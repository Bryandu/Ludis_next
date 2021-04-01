import { ComponentType, HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import styled from 'styled-components';

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

export const ToastBody = styled.div<ToastI>`
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  transform: ${props => {
    return (
      (props.show && props.top && 'translateY(0)') ||
      (!props.show && props.top && 'translateY(-100%)') ||
      (props.show && props.bottom && 'translateY(0)') ||
      (props.bottom && !props.show && 'translateY(100%)')
    );
  }};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.foreground};
  overflow: hidden;
  border: solid 1px ${Colors.blackBackground};
  transition: transform 0.2s linear 0s;
  top: ${props => (props.top ? 0 : 'calc(100vh - 50px)')};
  & > article {
    display: flex;
    z-index: 2;
    width: 100%;
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
`;
