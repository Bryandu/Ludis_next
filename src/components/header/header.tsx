import styled from "styled-components";
import Logo from "../logo/logo";
import { FiBell } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { BsSearch } from "react-icons/bs";
import { DivInput, InputComp } from "../input/input";
import Eu from "../../assets/img/eu.jpg";
import { Field, Form } from "formik";

const HeaderComp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background: #151515;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    margin: 0 8px;
    &:hover {
      cursor: pointer;
      color: #cf1020;
    }
  }
`;

const ImgHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

const Header: React.FC = ({ ...props }) => {
  return (
    <HeaderComp>
      <div>
        <Logo>Ludis</Logo>
      </div>
      <ImgHeader>
        <img src={Eu} />
        <BsSearch size="20px" />
      </ImgHeader>
      <nav>
        <List>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <li>
              <FiMap title="Locais" />
            </li>
            <li>
              <FiShoppingBag title="Lojas" />
            </li>
            <li>
              <FiBell title="Notificações" />
            </li>
            <li>
              <BsGear title="Configurações" />
            </li>
          </IconContext.Provider>
        </List>
      </nav>
    </HeaderComp>
  );
};

export default Header;
