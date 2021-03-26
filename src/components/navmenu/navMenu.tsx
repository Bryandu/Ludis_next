import { HTMLAttributes, memo, ReactChild } from 'react';

import { NavMenuContainer, NavMenus } from './styles';

export interface NavMenuI extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild[];
  backgroundColor?: string;
}

const NavMenu = ({ children, backgroundColor }: NavMenuI) => {
  return (
    <NavMenuContainer backgroundColor={backgroundColor}>
      <NavMenus>
        {children?.map((value, i) => {
          return <li key={i}>{value}</li>;
        })}
      </NavMenus>
    </NavMenuContainer>
  );
};

export default memo(NavMenu);
