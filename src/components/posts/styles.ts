import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const PostContainer = styled.article`
  display: block;
  position: relative;
  width: 100%;
  margin: 1rem;
  background-color: ${Colors.blackBody};
  border-radius: 5px;
  hr {
    border-color: ${Colors.redSecundary};
    margin: 0 0 1rem;
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
        margin-right: 0.5rem;
      }
    }
  }
`;

export const PostBody = styled.div`
  display: block;
  position: relative;
  width: 100%;
  min-height: 400px;
  div {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const PostFooter = styled.footer`
  display: block;
  position: relative;
  width: 100%;
  padding: 1rem;
  & :nth-child(2) {
    padding: 0.5rem 1rem 0;
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
  padding: 0.5rem;
`;

export const PostCommentsContainer = styled.aside`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 1rem 1rem;
`;

export const PostComment = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    & :first-child {
      display: flex;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
  p {
    & :last-child {
      font-size: 0.8em;
      font-weight: normal;
    }
  }
`;
