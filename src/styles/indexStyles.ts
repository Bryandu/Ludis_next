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
  background-color: ${Colors.blackBackground};
  .title {
    display: flex;
    align-items: center;
    h1 {
      margin-right: 20px;
    }
    @media screen and (max-width: 936px) {
      flex-direction: column;
    }
    @media screen and (max-width: 653px) {
      text-align: center;
      h1 {
        font-size: 4em;
        margin-right: 0;
      }
      p {
        font-size: 3em !important;
      }
    }
    p {
      font-size: 5em;
    }
  }
`;
export const HeaderHome = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.blackBody};
    border-radius: 35px;
    padding: 5px 6px;
    div {
      border-radius: 50%;
    }
  }
`;
export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/quadra4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;
