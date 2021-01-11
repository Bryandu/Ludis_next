import { IconContext } from "react-icons/lib";
import { List } from "../menu/styles";
import { ContainerDrop } from "./styles";
import { FiMap, FiShoppingBag, FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";

const MenuDrop = () => {
  return (
    <ContainerDrop>
      <nav>
        <ul>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <li>
              <FiMap title="Locais" />
              <p>Locais</p>
            </li>
            <li>
              <FiShoppingBag title="Lojas" />
              <p>Lojas</p>
            </li>
            <li>
              <FiBell title="Notificações" />
              <p>Notificações</p>
            </li>
            <li>
              <BsGear title="Configurações" />
              <p>Configurações</p>
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </ContainerDrop>
  );
};

export default MenuDrop;
