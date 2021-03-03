import styled from 'styled-components';

import { Colors } from '../../styles/global';

export const HeaderComp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: ${Colors.blackBody};
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
