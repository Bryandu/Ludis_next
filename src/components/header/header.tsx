import { HTMLAttributes, memo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiMenuUnfoldFill } from 'react-icons/ri';

import { Colors } from '../../styles/global';
import FormSearch from '../forms/formSearch';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import { DropSearch, HeaderComp, HeaderIcons, SearchHeader, SearchIcon } from './styles';

export interface IHeader extends HTMLAttributes<HTMLDivElement> {
  position?: string;
}

const Header = ({ position }: IHeader) => {
  const [searchdrop, setSearchdrop] = useState(false);

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
          <SearchIcon>
            <AiOutlineSearch
              onClick={() => setSearchdrop(!searchdrop)}
              title="Pesquisar"
              size="2em"
              color={searchdrop ? Colors.redPrimary : undefined}
            />
          </SearchIcon>
          <Menu />
        </HeaderIcons>
      </HeaderComp>
      <DropSearch show={searchdrop}>
        <SearchHeader>
          <FormSearch />
        </SearchHeader>
      </DropSearch>
    </>
  );
};

export default memo(Header);
