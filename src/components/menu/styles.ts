import styled from 'styled-components';

import { Colors } from '../../styles/global';

interface List {
  colored?: boolean;
}

export const List = styled.ul<List>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 0 8px;
  #drop {
    display: none;
    color: ${props => (props.colored ? Colors.redPrimary : '#fff')};
    &:focus {
      background-color: #444;
    }
    &:hover {
      cursor: pointer;
      color: ${Colors.redPrimary};
    }
    @media screen and (max-width: 767px) {
      display: flex;
    }
  }
  li {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    transition: 100ms ease-in-out;
    &:hover {
      cursor: pointer;
      color: ${Colors.redPrimary};
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
