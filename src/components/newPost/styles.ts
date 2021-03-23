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
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  justify-content: space-between;
  background-color: ${Colors.blackBody};
  @media screen and (max-width: 620px) {
    width: 100%;
    min-height: 100vh;
  }
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

export const NewPostContent = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: max-content;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  textarea {
    width: 100%;
    height: auto;
    resize: none;
    outline: none;
    background-color: transparent;
    color: #fff;
    border: none;
    padding: 1rem;
  }
`;

export const SetPostPreview = styled.section`
  display: flex;
  margin: 1rem;
  position: relative;
  min-height: 450px;
  overflow-y: auto;
`;

export const SetPostFooter = styled.footer`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px #000;
`;

export const IconsFiles = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 0.5rem;
  }
`;
