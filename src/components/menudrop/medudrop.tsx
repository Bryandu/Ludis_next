import { IconContext } from "react-icons/lib";
import { ContainerDrop } from "./styles";
import { FiMap, FiShoppingBag, FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { useEffect, useState } from "react";
interface ShowDrop {
  showDrop?: boolean;
}

const MenuDrop = ({ showDrop }: ShowDrop) => {
  return (
    <ContainerDrop show={showDrop}>
      <nav>
        <ul>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <li>
              <FiMap className="iconDrop" title="Locais" />
              <p>Locais</p>
            </li>
            <li>
              <FiShoppingBag className="iconDrop" title="Lojas" />
              <p>Lojas</p>
            </li>
            <li>
              <FiBell className="iconDrop" title="Notificações" />
              <p>Notificações</p>
            </li>
            <li>
              <BsGear className="iconDrop" title="Configurações" />
              <p>Configurações</p>
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </ContainerDrop>
  );
};

export default MenuDrop;
