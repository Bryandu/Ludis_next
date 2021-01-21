import styled, { css } from "styled-components";
import { Colors } from "../../styles/global";

interface BtnOutline {
  outline?: boolean;
  radius?: boolean;
}

export const Button = styled.button<BtnOutline>`
  padding: 8px 16px;
  border-radius: 3px;
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
      border: 2px solid ${Colors.redSecundary};
      color: ${Colors.redSecundary};
      &:hover {
        cursor: pointer;
        color: #ffffff;
      }
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: 25px;
      padding: 6px 16px;
    `}
`;
