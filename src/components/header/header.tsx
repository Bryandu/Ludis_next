import { HeaderComp, ImgHeader } from "./styles";
import Logo from "../logo/logo";
import FormSearch from "../forms/formSearch";
import Menu from "../menu/menu";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <HeaderComp>
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
