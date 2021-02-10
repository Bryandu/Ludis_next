import { ToastBody, ToastI } from './style';

const Toast = ({ topRight, bottomRight, show, children }: ToastI) => {
  return (
    <ToastBody show={show} topRight={topRight} bottomRight={bottomRight}>
      {children}
    </ToastBody>
  );
};

export default Toast;
