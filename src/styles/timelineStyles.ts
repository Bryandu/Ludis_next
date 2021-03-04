import styled from 'styled-components';

export const TimelineContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  position: relative;
  min-height: 93.41vh;
  top: 55px;
  background-color: transparent;
  padding: 1rem 0;
`;

export const TimelinePosts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const TimelineLeft = styled.div`
  display: block;
`;

export const TimelineRight = styled.div`
  display: block;
`;
