import styled from 'styled-components';

import { Colors } from '../../styles/global';

interface List {
  colored?: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  & > div {
    display: none;
    @media screen and (max-width: 769px) {
      display: flex;
    }

    & > svg {
      transition: 0.2s ease-in-out;
      margin: 0 0.5rem;
      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }
`;

export const List = styled.ul<List>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  #drop {
    display: none;
    color: ${props => (props.colored ? Colors.redPrimary : props.theme.color)};
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  li {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    svg {
      transition: 0.2s ease-in-out;
    }
    &:not(#drop) {
      margin: 0 0.5rem;
    }
    &:hover {
      cursor: pointer;
      color: ${Colors.redPrimary};
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    .iconDrop {
      transition: 100ms ease-in-out;
    }
  }
`;
