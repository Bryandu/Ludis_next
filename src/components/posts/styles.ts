import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const NewPost = styled.div`
  display: flex;
`;

export const PostContainer = styled.article`
  display: block;
  position: relative;
  margin: 0.5rem 1rem;
  background-color: ${props => props.theme.foreground};
  border-radius: 5px;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 1);
  hr {
    border-color: ${Colors.redSecundary};
  }
`;

export const PostFooterHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 0.5rem 0;
  div {
    display: flex;
    position: relative;
    justify-content: start;
    align-items: center;
    width: 100%;
    & :last-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    div {
      & :first-child {
        display: flex;
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 0.5rem;
        @media screen and (max-width: 768px) {
          width: 25px;
          height: 25px;
          margin: 0 0.2rem;
        }
      }
    }
  }
`;

export const PostBody = styled.div`
  display: block;
  position: relative;
  width: 100%;
  img {
    position: relative !important;
    width: 80vw !important;
    height: auto !important;
    max-height: 90vh !important;
    @media screen and (max-width: 480px) {
      width: 100vw !important;
    }
  }
  div {
    position: relative !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const PostFooter = styled.footer`
  display: block;
  position: relative;
  width: 100%;
  padding: 1rem;
  p {
    font-size: max(12px, 1.2vw);
  }
  & :nth-child(2) {
    padding: 0 0.5rem 0;
  }
  div {
    & :nth-child(3) {
      display: flex;
      position: relative;
      margin: 0.5rem;
      justify-content: space-between;
      align-items: center;
      div {
        display: inline;
        svg {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export const PostDescription = styled.div`
  display: block;
  padding: 0.5rem 1rem;
`;

export const PostCommentsContainer = styled.aside`
  display: flex;
  padding: 0 1rem 1rem;
`;

export const PostComment = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: initial;
  width: 100%;
  div {
    & :first-child {
      display: flex;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 0.5rem;
    }
  }
  p {
    & :last-child {
      font-size: 0.8em;
      font-weight: normal;
    }
  }
  .postComments {
    display: flex;
    width: 100%;
    div {
      & :first-child {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      & :last-child {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const ShowPost = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
`;

export const PostModalBody = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  svg {
    display: flex;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    & :hover {
      opacity: 0.5;
    }
  }
`;
