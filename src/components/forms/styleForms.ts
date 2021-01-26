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
  margin-top: 1rem;
  align-items: center;
  justify-content: ${props => (props.center ? 'center' : 'left')};
`;

export const ContainerField = styled.div`
  margin: 0.3rem 0;
`;

export const Erros = styled.bdo`
  color: ${Colors.redSecundary};
  font-size: 0.85rem;
`;
