import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const NewpostContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  padding: 0.5rem 0;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${Colors.redSecondary};
    cursor: pointer;
  }
  p {
    margin-left: 5px;
  }
`;

export const SetPost = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  justify-content: space-between;
  background-color: ${props => props.theme.foreground};
  @media screen and (max-width: 620px) {
    width: 90vw;
  }
`;

export const SetPostHeader = styled.header`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.foreground};
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
  align-items: center;
  justify-content: center;
  textarea {
    display: flex;
    position: relative;
    width: 100%;
    resize: none;
    outline: none;
    min-height: 100px;
    height: auto;
    background-color: transparent;
    color: ${props => props.theme.color};
    border: none;
    padding: 1rem;
  }
`;

export const SetPostPreview = styled.section`
  display: block;
  margin: 1rem;
  position: relative;
  height: 400px;
`;

export const SetPostFooter = styled.footer`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px ${props => props.theme.background};
`;

export const IconsFiles = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 0.5rem;
  }
`;
