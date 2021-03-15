import styled from 'styled-components';

import { Colors } from '../../styles/global';

interface ContainerButton {
  center?: boolean;
}

export const Label = styled.label`
  margin: 0;
`;

export const DivButton = styled.div<ContainerButton>`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    position: relative;
  }
`;

export const ContainerField = styled.div`
  margin: 0.3rem 0;
`;

export const Erros = styled.bdo`
  color: ${Colors.redSecundary};
  font-size: 0.85rem;
`;

export const Rememberme = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2rem 0;
`;
