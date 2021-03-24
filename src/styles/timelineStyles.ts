import styled from 'styled-components';

export const TimelineContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  position: relative;
  justify-content: space-evenly;
  justify-items: center;
  top: 55px;
  background-color: transparent;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr;
  }
`;

export const TimelinePosts = styled.div`
  width: 100%;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 91.8vh;
  .warnings {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const TimelineLeft = styled.div`
  display: block;
  position: sticky;
  top: 55px;
  width: 100%;
  padding: 1rem;
  height: 91.8vh;
  @media screen and (max-width: 768px) {
    position: relative;
    height: auto;
    top: 0;
    padding-bottom: 0;
  }
`;

export const TimelineRight = styled.div`
  display: block;
  position: sticky;
  top: 71px;
  padding: 1rem;
  height: 91.8vh;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
