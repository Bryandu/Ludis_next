import Image from 'next/image';

import FormSearch from '../forms/formSearch';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import { HeaderComp, ImgHeader } from './styles';

const Header = () => {
  return (
    <>
      <HeaderComp>
        <Logo fontsize="30px">Ludis</Logo>
        <ImgHeader>
          {/* <Image src="/img/eu.jpg" alt="You" layout="responsive" /> */}
          <FormSearch />
        </ImgHeader>
        <Menu />
      </HeaderComp>
    </>
  );
};

export default Header;
