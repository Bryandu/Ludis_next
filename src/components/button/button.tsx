import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface Hprops {
  href?: string;
}

export const BtnComp = styled.a.attrs((props: any) => ({
  width: props.width || '5rem'
}))`
  position: absolute;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #cf1020;
  padding: 8px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
  margin: 15px;
  font-size: 0.9em;
  width: ${(props) => props.width};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background: #e5383b;
  }
`;

const Button: React.FC<Hprops> = ({ ...props }) => {
  return (
    <Link href={props.href} passHref>
      <BtnComp>{props.children}</BtnComp>
    </Link>
  );
};

export default Button;
