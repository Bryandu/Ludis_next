import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { FiBell, FiMap, FiShoppingBag } from 'react-icons/fi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

import { Colors } from '../../styles/global';
import MenuDrop from '../menudrop/menudrop';
import { List, Nav } from './styles';

export interface MenuI {
  search?: VoidFunction;
}

const Menu = () => {
  const [elementtarget, setElementtarget] = useState<HTMLElement>();
  const [drop, setDrop] = useState<boolean>();
  const modalRef = useRef(null);
  const route = useRouter();

  useEffect(() => {
    const main = document.getElementById('__next');
    main && setElementtarget(main);
  }, []);

  const showDrop = () => {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
      elementtarget?.addEventListener('click', removeDrop);
    }
  };

  const removeDrop = (e: Event) => {
    const event = e.target as HTMLDivElement;
    e.preventDefault();
    e.stopPropagation();
    if (event.id === 'dropmenu') {
      setDrop(true);
    } else {
      setDrop(false);
      elementtarget?.removeEventListener('click', removeDrop);
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    route.reload();
  };

  return (
    <>
      <Nav>
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
            <li>
              <AiOutlineLogout onClick={logOut} title="Sair" />
            </li>
          </IconContext.Provider>
        </List>
      </Nav>
      <MenuDrop showDrop={drop} ref={modalRef} />
    </>
  );
};

export default Menu;
