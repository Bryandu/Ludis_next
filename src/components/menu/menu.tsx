import { List } from "./styles";
import { IoIosArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { FiMap, FiShoppingBag, FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import MenuDrop from "../menudrop/medudrop";
import { ChangeEvent, useRef, useState } from "react";
import { Colors } from "../../styles/global";

const Menu = () => {
  const [drop, setDrop] = useState<boolean>();
  const modalRef = useRef();

  const showDrop = () => {
    if (drop) {
      setDrop(false);
    } else {
      const main = document.querySelector("main");
      setDrop(true);
      main.addEventListener("click", removeDrop);
    }
  };

  const removeDrop = (e: Event) => {
    let event = e.target as HTMLDivElement;
    e.stopPropagation();
    if (event.id == "dropmenu") {
      setDrop(true);
    } else {
      const main = document.querySelector("main");
      setDrop(false);
      main.removeEventListener("click", removeDrop);
    }
  };

  return (
    <>
      <nav>
        <List>
          <li id="drop" onClick={showDrop}>
            <IoIosArrowDropdown
              title="Menu"
              size="2em"
              color={drop ? Colors.redPrimary : "#fff"}
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
      <MenuDrop showDrop={drop} ref={modalRef} />
    </>
  );
};

export default Menu;
