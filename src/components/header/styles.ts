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
  h1 {
    margin-left: 0.5rem;
    @media screen and (max-width: 768px) {
      position: relative;
      left: calc(50% - 70.92px / 2);
      margin-left: 0;
    }
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  width: 300px;
  form,
  label,
  input {
    margin-left: 2px;
    color: #fff;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > nav {
    :first-child {
      position: absolute;
      display: flex;
      transition: 0.2s ease-in-out;
      @media screen and (min-width: 768px) {
        display: none;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
    left: 1rem;
  }
`;
