import styled from "styled-components";
import { Colors } from "../../styles/global";

export const ContainerDrop = styled.div`
  display: flex;
  position: absolute;
  top: 65px;
  right: 12px;
  z-index: 1000;
  border-radius: 5px;
  background-color: #151515;
  padding: 0 1rem;
  transition: 100ms ease-in-out;
  li {
    display: flex;
    justify-content: baseline;
    align-items: center;
    margin: 1rem 0;
    transition: 100ms ease-in-out;
    &:hover {
      cursor: pointer;
      color: #cf1020;
    }
    p {
      font-size: 1rem;
      margin-left: 0.5rem;
      user-select: none;
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
