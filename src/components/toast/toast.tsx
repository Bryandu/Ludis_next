import { IoClose } from 'react-icons/io5';

import { ToastBody, ToastI } from './style';

const Toast = ({ bottom, top, show, hide, Icon, colorIcon, ...props }: ToastI) => {
  return (
    <ToastBody show={show} top={top} bottom={bottom}>
      <article>
        {hide && <IoClose onClick={() => hide()} size="20px" />}
        {Icon && (
          <aside>
            <Icon size="45px" color={colorIcon} />
          </aside>
        )}
        {props.children}
      </article>
    </ToastBody>
  );
};

export default Toast;
