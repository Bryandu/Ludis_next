import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const NewpostContainer = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: ${Colors.blackBody};
  border: 1px solid black;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  p {
    font-size: 1em;
    padding: 0.5rem;
  }
`;

export const PostTypes = styled.footer`
  display: flex;
  width: 100%;
  height: 32px;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    width: 1px;
    background: ${Colors.redSecundary};
    height: 20px;
  }
  svg {
    width: 30px;
    height: auto;
    & :hover {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    width: 100%;
    height: 31px;
    justify-content: center;
    & :first-child {
      border-bottom-left-radius: 5px;
    }
    & :last-child {
      border-bottom-right-radius: 5px;
    }
    &:hover {
      cursor: pointer;
      background-color: ${Colors.blackBackground};
    }
  }
`;
