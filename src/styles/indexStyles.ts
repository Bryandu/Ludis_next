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
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    @media screen and (max-width: 1024px) {
      justify-content: center;
      height: 100px;
      padding: 1rem 0 0;
    }
  }
`;

export const HomeContainer = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const HomeImg = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  &:first-child {
    font-size: 1.2rem;
    padding-left: 3rem;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    & > h2 {
      text-align: center;
      font-weight: normal;
    }
    & > div {
      display: flex;
      display: flex;
      position: relative;
      width: 100%;
      height: 400px;
    }
  }
  &:last-child {
    bottom: 38px;
    padding-right: 2rem;
    @media screen and (max-width: 1024px) {
      bottom: 18px;
      padding: 0;
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      background-color: ${Colors.blackBody};
      padding: 2rem 2.5rem 0;
      border-radius: 6px;
      width: 350px;
      @media screen and (max-width: 360px) {
        background: transparent;
        padding: 2rem 1rem 0;
        width: 320px;
      }
      .line {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 1rem;
        & > span {
          background-color: ${Colors.redPrimary};
          width: 50%;
          height: 2px;
          margin: 0 1rem 0 0;
          & :last-child {
            margin: 0 0 0 1rem;
            height: 2px;
          }
        }
      }
      & > h1 {
        text-align: center;
        margin-bottom: 1rem;
      }
      & > h3 {
        text-align: center;
        margin: 0 0 1rem;
        font-size: 1.8rem;
        font-weight: normal;
      }
      & > aside {
        display: block;
        text-align: center;
        margin: 0rem 0 2rem;
        & > div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export const HomeIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    width: 100%;
    & :first-child {
      color: #000;
      background-color: #fff;
      margin-right: 2px;
      & :hover {
        cursor: pointer;
      }
    }
    & :last-child {
      color: #fff;
      background-color: #3c5a9a;
      margin-left: 2px;
      & :hover {
        cursor: pointer;
      }
    }
  }
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
