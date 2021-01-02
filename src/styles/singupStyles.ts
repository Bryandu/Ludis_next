import styled from "styled-components";
import { Colors } from "./global";

export const Section = styled.section`
  position: fixed;
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
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 7rem;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
    justify-content: center;
    width: 100%;
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
  padding: 2rem 2rem;
  margin: 0rem;
  border-radius: 5px;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: ${Colors.blackBackground};
  @media screen and (max-width: 420px) {
    background-color: transparent;
  }
`;

export const DivText = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
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
`;

export const ImgWinners = styled.img`
  width: 100%;
  height: auto;
`;
