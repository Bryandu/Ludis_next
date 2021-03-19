import styled from 'styled-components';

export const TimelineContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: auto;
  position: relative;
  justify-content: space-evenly;
  justify-items: center;
  height: 100%;
  top: 55px;
  background-color: transparent;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1.5fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1.5fr;
  }
`;

export const TimelinePosts = styled.div`
  width: 550px;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  .warnings {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
  @media screen and (max-width: 1024px) {
    width: auto;
    max-width: 500px;
  }
`;

export const TimelineLeft = styled.div`
  display: block;
  position: sticky;
  top: 55px;
  width: 100%;
  padding: 1rem;
  max-height: 100vh;
  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    margin: 0;
    height: auto;
    max-width: 500px;
  }
`;

export const TimelineRight = styled.div`
  display: block;
  position: sticky;
  top: 71px;
  padding: 1rem;
  height: 91.5vh;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
