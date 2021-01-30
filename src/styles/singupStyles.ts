import styled from 'styled-components';

import { Colors } from './global';

export const Section = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const DivForm = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding-left: 6rem;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 420px) {
    padding: 0;
  }
`;

export const DivImg = styled(DivForm)`
  position: relative;
  height: 100vh;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 4rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const AsideForm = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0rem;
  border-radius: 5px;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: ${Colors.blackBackground};
  box-shadow: 14px 14px 25px #0e0e0e, -14px -14px 25px #1c1c1c;
  @media screen and (max-width: 420px) {
    width: 100%;
    height: 100vh;
    padding: 2rem;
  }
`;

export const DivText = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  justify-content: center;
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 400px;
  height: 350px;
  position: absolute;
`;

export const ImgWinners = styled.img`
  width: 100%;
  height: auto;
`;
