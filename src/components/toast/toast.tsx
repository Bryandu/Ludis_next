import { IoClose } from 'react-icons/io5';

import { ToastBody, ToastI } from './style';

const Toast = ({ right, left, bottom, top, show, hide, Icon, colorIcon, ...props }: ToastI) => {
  return (
    <ToastBody show={show} left={left} right={right} top={top} bottom={bottom}>
      <article>
        {hide && <IoClose onClick={() => hide()} size="20px" />}
        <aside>{Icon && <Icon size="45px" color={colorIcon} />}</aside>
        {props.children}
      </article>
    </ToastBody>
  );
};

export default Toast;
