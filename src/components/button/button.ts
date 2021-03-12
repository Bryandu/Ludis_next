import styled, { css } from 'styled-components';

import { Colors } from '../../styles/global';

interface BtnOutline {
  outline?: boolean;
  curve?: boolean;
}

export const Button = styled.button<BtnOutline>`
  padding: 8px 16px;
  border-radius: 3px;
  border-style: none;
  background-color: ${Colors.redPrimary};
  font-size: 1rem;
  color: #ffffff;
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
        color: #ffffff;
      }
    `}
  ${props =>
    props.curve &&
    css`
      border-radius: 25px;
      padding: 6px 16px;
    `}
`;
