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
    width: 2px;
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

export const SetPost = styled.section`
  display: block;
  flex-direction: column;
  width: 600px;
  min-height: 350px;
  justify-content: space-between;
  background-color: ${Colors.blackBody};
`;

export const SetPostHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #000;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  h1 {
    font-weight: normal;
  }
  svg {
    cursor: pointer;
  }
`;
