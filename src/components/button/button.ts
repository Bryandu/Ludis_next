import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../../styles/global";

interface BtnOutline {
  outline?: boolean;
}

export const Button = styled.button<BtnOutline>`
  padding: 9px 18px;
  border-radius: 4px;
  border-style: none;
  background-color: ${Colors.redPrimary};
  font-size: 1rem;
  color: #ffffff;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.redSecundary};
  }
  ${props =>
    props.outline &&
    css`
      background: transparent;
      border: 2px solid ${Colors.redPrimary};
      color: ${Colors.redPrimary};
      &:hover {
        cursor: pointer;
        color: #ffffff;
      }
    `}
`;
