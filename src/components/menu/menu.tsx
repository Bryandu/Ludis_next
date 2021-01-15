import { List } from "./styles";
import { IoIosArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { FiMap, FiShoppingBag, FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import MenuDrop from "../menudrop/medudrop";
import { useState, useEffect } from "react";
import { removeAllListeners } from "process";
import { Colors } from "../../styles/global";

const Menu = () => {
  const [drop, setDrop] = useState(false);

  return (
    <>
      <nav>
        <List>
          <li id="drop">
            <IoIosArrowDropdown
              onClick={() => setDrop(!drop)}
              title="Menu"
              size="2em"
            />
          </li>
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
      <MenuDrop showDrop={drop} />
    </>
  );
};

export default Menu;
