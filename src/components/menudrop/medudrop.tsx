import { ForwardedRef, forwardRef, HTMLAttributes, memo } from 'react';
import { BsGear } from 'react-icons/bs';
import { FiBell, FiMap, FiShoppingBag } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

import { ContainerDrop } from './styles';
interface ShowDrop extends HTMLAttributes<HTMLDivElement> {
  showDrop?: boolean;
}

const MenuDrop = forwardRef(({ showDrop }: ShowDrop, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ContainerDrop showDrop={showDrop} id="dropmenu" ref={ref}>
      <nav>
        <ul>
          <IconContext.Provider value={{ size: '1.5em' }}>
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
});

export default memo(MenuDrop);

MenuDrop.displayName = 'MenuDrop';
