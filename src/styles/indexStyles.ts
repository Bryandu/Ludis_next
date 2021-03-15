import styled from 'styled-components';

import { Colors } from './global';

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
  header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 75px;
    left: 50%;
    align-items: center;
    padding: 1rem;
    @media screen and (max-width: 768px) {
      left: 0;
      justify-content: center;
      height: 100px;
      padding: 1rem 0 0;
    }
  }
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
  background: #000;
  @media screen and (max-width: 768px) {
    display: none;
  }
  h2 {
    display: block;
    position: absolute;
    z-index: 2;
    font-size: 4em;
    margin-left: 3rem;
  }
`;

export const HomeImgTwo = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .line {
    margin: 1rem 0;
  }
  & > div {
    width: 100%;
    max-width: 350px;
    position: relative;
    @media screen and (max-width: 768px) {
      top: -20px;
    }
    @media screen and (max-width: 415px) {
      width: 300px;
    }
    & > div {
      margin: 1rem 0;
      h2 {
        font-size: 2.5em;
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
    border: 2px solid ${Colors.redSecundary};
    margin-right: 10px;
    color: ${Colors.redSecundary};
    transition: 200ms ease-in-out;
    & :hover {
      cursor: pointer;
      background: ${Colors.redSecundary};
      color: ${Colors.blackBackground};
      border-color: ${Colors.blackBody};
    }
  }
`;

export const SingUpLogin = styled.span`
  display: flex;
  position: absolute;
  bottom: 20px;
  a {
    text-decoration: underline ${Colors.redSecundary} 2px;
    & :hover {
      color: ${Colors.redSecundary};
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
