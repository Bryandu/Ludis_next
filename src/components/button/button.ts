import styled from "styled-components";
import { Colors } from "../../styles/global";

export const Button = styled.button.attrs((props: any) => ({
  width: props.width || "auto",
}))`
  padding: 8px 20px;
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
`;
