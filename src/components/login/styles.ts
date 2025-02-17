import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const Main = styled.main`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.section`
  display: grid;
  position: relative;
  top: 0;
  left: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeImg = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  h2 {
    display: block;
    position: absolute;
    z-index: 2;
    font-size: 4em;
    margin-left: 3rem;
    color: #ffffff;
  }
  img {
    filter: brightness(0.5);
  }
`;

export const HomeImgTwo = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  .line {
    margin: 1rem 0;
  }
  & > header {
    display: flex;
    position: relative;
    top: 15px;
    width: 100%;
    align-items: center;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  & > div {
    width: 310px;
    position: relative;
    top: -20px;
    @media screen and (max-width: 768px) {
      top: 0;
    }
    & > div {
      margin: 1rem 0;
      h2 {
        font-size: 2.5em;
      }
    }
  }
  form {
    div {
      div {
        width: 100%;
      }
    }
  }
`;

export const HomeIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    border-radius: 50%;
    border: 2px solid ${Colors.redSecondary};
    margin-right: 10px;
    color: ${Colors.redSecondary};
    transition: 200ms ease-in-out;
    & :hover {
      cursor: pointer;
      background: ${Colors.redSecondary};
      color: ${Colors.blackBackground};
      border-color: ${props => props.theme.foreground};
    }
  }
`;

export const SingUpLogin = styled.span`
  display: flex;
  padding: 1rem;
  a {
    text-decoration: underline ${Colors.redSecondary} 2px;
    & :hover {
      color: ${Colors.redSecondary};
    }
  }
`;

export const SpinnerPosition = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ToastLogin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  & > h6 {
    width: 100%;
  }
  div {
    display: flex;
    width: 100%;
    height: 50px;
  }
`;
