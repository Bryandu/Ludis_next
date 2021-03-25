import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface NavMenuIstyles extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
}

export const NavMenuContainer = styled.aside<NavMenuIstyles>`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const NavMenus = styled.nav`
  display: block;
  position: relative;
  width: 100%;
  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
