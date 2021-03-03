import Image from 'next/image';
import { HTMLAttributes } from 'react';

import FormSearch from '../forms/formSearch';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import { HeaderComp, ImgHeader } from './styles';

export interface IHeader extends HTMLAttributes<HTMLDivElement> {
  position?: string;
}

const Header = ({ position }: IHeader) => {
  return (
    <>
      <HeaderComp position={position}>
        <Logo fontsize="30px">Ludis</Logo>
        <ImgHeader>
          <Image
            className="imgProfile"
            width={18}
            height={35}
            title="perfil"
            alt="perfil"
            src="/img/eu.jpg"
          />
          <FormSearch />
        </ImgHeader>
        <Menu />
      </HeaderComp>
    </>
  );
};

export default Header;
