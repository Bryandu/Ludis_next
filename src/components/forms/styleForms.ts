import styled, { css } from "styled-components";
import { Style } from "util";
import { Colors } from "../../styles/global";

export const Label = styled.label`
  margin: 0 0 0 0;
`;

export const DivButton = styled.div`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  justify-content: left;
  ${props =>
    props.outline &&
    css`
      justify-content: center;
    `}
`;

export const ContainerField = styled.div`
  margin: 0.3rem 0;
`;

export const Erros = styled.bdo`
  color: ${Colors.redSecundary};
  font-size: 0.85rem;
`;
