import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { Colors } from '../../styles/global';

export interface BtnOutline extends HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  curve?: boolean;
  name: string;
  disabled?: boolean;
  width?: string;
  type?: 'submit' | 'reset' | 'button';
}

export const Btn = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.button<BtnOutline>`
  padding: 8px 16px;
  width: ${props => props.width || 'auto'};
  border-radius: 3px;
  border-style: none;
  background-color: ${Colors.redPrimary};
  font-size: 1rem;
  color: ${props => props.theme.color};
  outline: ${Colors.redSecundary};
  box-shadow: 0 4px 14px 0 rgba(207, 16, 32, 0.4);
  &:hover {
    cursor: pointer;
    background-color: ${Colors.redSecundary};
  }
  ${props =>
    props.outline &&
    css`
      background: transparent;
      border: 2px solid ${Colors.redSecundary};
      color: ${Colors.redSecundary};
      &:hover {
        cursor: pointer;
        color: ${props => props.theme.color};
      }
    `}
  ${props =>
    props.curve &&
    css`
      border-radius: 25px;
      padding: 6px 16px;
    `}
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      & :hover {
        cursor: default;
        opacity: 0.5;
      }
    `}
`;
