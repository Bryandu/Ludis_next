import { ForwardedRef, forwardRef, memo } from 'react';
import { IoClose } from 'react-icons/io5';

import { ToastBody, ToastI } from './style';

const Toast = forwardRef(
  (
    { bottom, top, show, hide, Icon, colorIcon, ...props }: ToastI,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <ToastBody ref={ref} show={show} top={top} bottom={bottom}>
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
  }
);

export default memo(Toast);
Toast.displayName = 'Toast';
