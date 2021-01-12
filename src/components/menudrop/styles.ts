import styled, { keyframes } from "styled-components";
import { Colors } from "../../styles/global";

const show = keyframes`
  from{
    height: 0;
    opacity: 0;
  }
  to{
    height: 100%;
    opacity: 100%;
  }
`;

export const ContainerDrop = styled.div`
  display: flex;
  position: absolute;
  top: 65px;
  right: 12px;
  z-index: 1000;
  border-radius: 5px;
  background-color: #151515;
  padding: 0 1rem;
  li {
    display: flex;
    justify-content: baseline;
    align-items: center;
    margin: 1rem 0;
    transition: 200ms ease-in-out;
    & > .iconDrop {
      animation: ${show} 200ms linear;
    }
    &:hover {
      cursor: pointer;
      color: #cf1020;
    }
    p {
      font-size: 1rem;
      margin-left: 0.5rem;
      user-select: none;
      animation: ${show} 200ms linear;
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
