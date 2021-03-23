import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface DivInputI extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const InputComp = styled.input`
  color: #000000;
  background: transparent;
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  font-size: 1rem;
  padding-right: 3px;
  &::placeholder {
    color: #1c1c1c;
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
  //border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 5px;
  color: ${props => props.theme.color};
  background: rgba(255, 255, 255, 0.9);
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const DivInputIcon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  label {
    display: contents;
  }
  input {
    display: none;
  }
`;
