import styled from 'styled-components';
import { Colors } from './global';

export const SectionLogin = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('/img/basquete.jpg');
  background-position: center;
  background-size: cover;
  article {
    position: absolute;
    width: 300px;
    height: 400px;
    background: ${Colors.blackBackground};
    border-radius: 5px;
    margin: 0 1rem;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 480px) {
      background: transparent;
    }
  }
  h1 {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: normal;
    span {
      color: ${Colors.redPrimary};
    }
  }
`;

export const DivForm = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;

export const DivPassword = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0 0;
`;
