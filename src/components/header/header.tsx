import { HeaderComp, ImgHeader } from "./styles";
import Logo from "../logo/logo";
import Eu from "../../assets/img/eu.jpg";
import FormSearch from "../forms/formSearch";
import Menu from "../menu/menu";

const Header = () => {
  return (
    <>
      <HeaderComp>
        <Logo fontsize="30px">Ludis</Logo>
        <ImgHeader>
          <img src={Eu} />
          <FormSearch />
        </ImgHeader>
        <Menu />
      </HeaderComp>
    </>
  );
};

export default Header;
