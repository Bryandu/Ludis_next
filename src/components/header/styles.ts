import styled from 'styled-components';

export const HeaderComp = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: #151515;
  z-index: 100;
  top: 0;
`;

export const ImgHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
