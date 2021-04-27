import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const DivForm = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  padding: 4rem;
  @media screen and (max-width: 1024px) {
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
  padding: 4rem;
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
  background-color: ${props => props.theme.foreground};
  @media screen and (max-width: 420px) {
    width: 100%;
    height: 100vh;
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
