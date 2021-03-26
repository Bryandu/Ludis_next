import styled from 'styled-components';

import { IHeader } from './header';

export const HeaderComp = styled.header<IHeader>`
  display: flex;
  position: ${props => props.position || 'inherit'};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: #000;
  z-index: 99;
`;

export const ImgHeader = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 0 10px;
    img {
      border-radius: 50%;
    }
  }
`;
