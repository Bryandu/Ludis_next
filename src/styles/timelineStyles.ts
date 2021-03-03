import styled from 'styled-components';

export const TimelineContainer = styled.section`
  display: block;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 91.8vh;
  background-color: transparent;
`;

export const TimelinePosts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 50vw;
  left: calc(50% - (50vw / 2));
`;
