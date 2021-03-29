import { HTMLAttributes, memo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiMenuUnfoldFill } from 'react-icons/ri';

import FormSearch from '../forms/formSearch';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import { HeaderComp, HeaderIcons, SearchHeader } from './styles';

export interface IHeader extends HTMLAttributes<HTMLDivElement> {
  position?: string;
}

const Header = ({ position }: IHeader) => {
  return (
    <>
      <HeaderComp position={position}>
        <Logo fontsize="30px">Ludis</Logo>
        <SearchHeader>
          <AiOutlineSearch title="Pesquisar" color="#fff" size="2em" />
          <FormSearch />
        </SearchHeader>
        <HeaderIcons>
          <nav>
            <RiMenuUnfoldFill title="Opções" size="2em" />
          </nav>
          <Menu />
        </HeaderIcons>
      </HeaderComp>
    </>
  );
};

export default memo(Header);
