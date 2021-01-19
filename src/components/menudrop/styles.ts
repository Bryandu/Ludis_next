import styled, { keyframes, css } from "styled-components";
import { Colors } from "../../styles/global";

interface ShowDrop {
  showDrop?: boolean;
}

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

export const BackDrop = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: transparent;
`;

export const ContainerDrop = styled.div<ShowDrop>`
  display: none;
  position: absolute;
  top: 65px;
  right: 12px;
  z-index: 100;
  border-radius: 5px;
  background-color: #151515;
  padding: 0 1rem;
  z-index: 100;
  ${props =>
    props.showDrop &&
    css`
      display: flex;
    `}
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
      color: ${Colors.redPrimary};
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
