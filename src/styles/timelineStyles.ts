import styled from 'styled-components';

import { Colors } from './global';

export const TimelineContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(100px, 450px) max-content minmax(100px, 450px);
  flex-direction: row-reverse;
  position: relative;
  justify-content: center;
  background-color: transparent;
  top: 56px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: minmax(100px, 450px) max-content;
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
  padding: 1rem;
  top: 56px;
  height: calc(100vh - 56px);
  //background-color: ${Colors.blackBody};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavProfile = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: ${Colors.blackBody};
  padding: 0.5rem;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  div {
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: 0;
    margin-right: 0;
    left: 2px;
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
