import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styles/global';

interface DivInputI extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const InputComp = styled.input`
  color: ${props => props.theme.background};
  background: transparent;
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  font-size: 1rem;
  padding-right: 3px;
  &::placeholder {
    color: ${Colors.blackBackground};
    font-size: 1rem;
  }
`;
export const DivInput = styled.div.attrs((props: DivInputI) => ({
  width: props.width || '100%',
  height: props.height || '100%'
}))`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 3px;
  color: ${props => props.theme.color};
  background: rgba(255, 255, 255, 0.9);
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const DivInputIcon = styled.div<DivInputI>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${props => props.width ?? 'auto'};
  height: ${props => props.height ?? 'auto'};
  label {
    display: contents;
  }
  input {
    display: none;
  }
  svg {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    & :hover {
      color: ${Colors.redSecondary} !important;
    }
  }
  img {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    & :hover {
      opacity: 0.8;
    }
  }
`;
