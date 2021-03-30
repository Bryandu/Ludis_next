import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const BtnAnchor = styled.a`
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: ${Colors.redSecundary};
  padding: 8px;
  color: ${props => props.theme.color};
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 0.9em;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background: ${Colors.redSecundary};
  }
`;

export const AnchorText = styled.a`
  color: #ffffff;
  text-decoration: none;
  outline-color: ${Colors.redSecundary};
  transition: 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${Colors.redSecundary};
  }
`;
