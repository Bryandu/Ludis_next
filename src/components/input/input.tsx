import React from 'react';
import styled from 'styled-components';
import { Styles } from '../../styles/interfaces';

const InputComp = styled.input.attrs((props) => ({
  placeholder: props.placeholder || '',
  type: props.type || 'text'
}))`
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
const DivInput = styled.div.attrs((props: any) => ({
  width: props.width || '1em',
  height: props.height || '1em'
}))`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: ${(props) => props.theme.color};
  background: rgba(255, 255, 255, 0.5);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Input: React.FC<Styles> = ({ ...props }) => {
  return (
    <DivInput width={props.width} height={props.height}>
      <InputComp placeholder={props.placeholder} type={props.type} />
      {props.children}
    </DivInput>
  );
};

export default Input;
