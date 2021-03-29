import styled from 'styled-components';

import { Colors } from './global';

export const TimelineContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(200px, 400px) minmax(min-content, 550px) minmax(200px, 400px);
  flex-direction: row-reverse;
  position: relative;
  justify-content: center;
  background-color: transparent;
  top: 56px;
  @media screen and (min-width: 1024px) and (max-width: 1920px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelinePosts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 56px);
  justify-self: center;
  .warnings {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const TimelineLeft = styled.div`
  display: block;
  position: sticky;
  padding: 0.5rem 1rem;
  top: 56px;
  height: calc(100vh - 56px);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavProfile = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  background-color: ${Colors.blackBody};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  div {
    display: block;
    position: relative !important;
    border-radius: 50%;
    width: 40px;
    flex-grow: 1;
    img {
      position: relative !important;
      width: 100% !important;
      height: auto !important;
    }
  }
  h2 {
    flex-grow: 2;
    font-size: max(20px, 1vw);
  }
`;

export const TimelineRight = styled.div`
  display: block;
  position: sticky;
  top: 71px;
  padding: 1rem;
  height: calc(100vh - 55px);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
