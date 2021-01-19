import { List } from "./styles";
import { IoIosArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { FiMap, FiShoppingBag, FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import MenuDrop from "../menudrop/medudrop";
import { useRef, useState } from "react";
import { Colors } from "../../styles/global";

const Menu = () => {
  const [drop, setDrop] = useState<boolean>();
  const modalRef = useRef();

  const listener = () => {
    const main = document.querySelector("main");
    setDrop(!drop);
    main.addEventListener("click", remove);
    console.log(drop);
  };

  function remove(e: Event) {
    let event = e.target as HTMLDivElement;
    if (event.id == "dropmenu") {
      setDrop(true);
    } else {
      const main = document.querySelector("main");
      setDrop(false);
      main.removeEventListener("click", remove);
    }
  }

  return (
    <>
      <nav>
        <List>
          <li id="drop">
            <IoIosArrowDropdown
              onClick={listener}
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
