import styled, { css, keyframes } from 'styled-components';

import { Colors } from '../../styles/global';
import { IHeader } from './header';

export interface DropSearch {
  show: boolean;
}

const searchshow = keyframes`
  from{ top: 0; }
  to{ top: 54px }
`;
const searchhide = keyframes`
  from{ top: 54px; }
  to{ top: 0; }
`;

export const HeaderComp = styled.header<IHeader>`
  display: flex;
  position: ${props => props.position || 'inherit'};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: ${props => props.theme.background};
  z-index: 100;
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
  :focus-within {
    background-color: ${props => props.theme.foreground};
    input:-webkit-autofill {
      box-shadow: unset;
      -webkit-text-fill-color: ${props => props.theme.color} !important;
      -webkit-box-shadow: 0 0 0px 1000px ${Colors.blackForeground} inset !important;
    }
  }
  form,
  label,
  input {
    margin-left: 2px;
    color: ${props => props.theme.color};
    width: 98%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${props => props.theme.color} !important;
    input:-webkit-autofill {
      box-shadow: unset;
      -webkit-text-fill-color: ${props => props.theme.color} !important;
      -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.background} inset !important;
    }
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
      @media screen and (min-width: 769px) {
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

export const SearchIcon = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5px;
  transition: 0.2s ease-in-out;
  color: ${props => props.theme.color};
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const DropSearch = styled.aside<DropSearch>`
  width: 100%;
  display: none;
  position: fixed;
  z-index: 99;
  top: ${props => (props.show ? '54px' : '0')};
  padding: 0 15px 10px 15px;
  background-color: ${props => props.theme.background};
  @media screen and (max-width: 768px) {
    /* display: ${props => (props.show ? 'block' : 'none')}; */
    display: block;
  }
  div,
  form,
  label,
  input {
    height: 35px;
    display: block;
    width: 100%;
    margin: 0;
  }
  ${props =>
    props.show &&
    css`
      animation: 200ms linear ${searchshow};
    `}
  ${props =>
    !props.show &&
    css`
      animation: 200ms linear ${searchhide};
    `}
`;
