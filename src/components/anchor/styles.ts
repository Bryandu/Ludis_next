import { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styles/global';

interface AnchorI extends AnchorHTMLAttributes<HTMLAnchorElement> {
  width?: string;
}

export const BtnAnchor = styled.a.attrs((props: AnchorI) => ({
  width: props.width || '5rem'
}))`
  position: absolute;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: ${Colors.redPrimary};
  padding: 8px;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  outline: none;
  margin: 15px;
  font-size: 0.9em;
  width: ${props => props.width};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background: ${Colors.redSecundary};
  }
`;

export const Anchor = styled.a`
  color: #ffffff;
  margin: 0 0.5rem;
  text-decoration: none;
  outline-color: ${Colors.redSecundary};
  &:hover {
    cursor: pointer;
    color: ${Colors.redSecundary};
  }
`;
