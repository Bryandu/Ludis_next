import { useRef, useState } from 'react';
import { BsGear } from 'react-icons/bs';
import { FiBell, FiMap, FiShoppingBag } from 'react-icons/fi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

import { Colors } from '../../styles/global';
import MenuDrop from '../menudrop/medudrop';
import { List } from './styles';

const Menu = () => {
  const [drop, setDrop] = useState<boolean>();
  const modalRef = useRef();

  const showDrop = () => {
    if (drop) {
      setDrop(false);
    } else {
      const main = document.querySelector('div');
      setDrop(true);
      main.addEventListener('click', removeDrop);
    }
  };

  const removeDrop = (e: Event) => {
    const event = e.target as HTMLDivElement;
    e.stopPropagation();
    if (event.id === 'dropmenu') {
      setDrop(true);
    } else {
      const main = document.querySelector('div');
      setDrop(false);
      main.removeEventListener('click', removeDrop);
    }
  };

  return (
    <>
      <nav>
        <List>
          <li id="drop">
            <IoIosArrowDropdown
              onClick={showDrop}
              title="Menu"
              size="2em"
              color={drop ? Colors.redPrimary : '#fff'}
              className="iconDrop"
            />
          </li>
          <IconContext.Provider value={{ size: '1.5em' }}>
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
