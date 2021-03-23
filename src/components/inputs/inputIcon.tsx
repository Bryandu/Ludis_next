import { useField } from 'formik';
import { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Colors } from '../../styles/global';
import { DivInputIcon } from './styles';

interface InputIconI extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
  iconsize?: string;
  iconColor?: string;
}

export const InputIcon = ({ icon: Icon, ...props }: InputIconI) => {
  const [field] = useField(props);
  return (
    <>
      <DivInputIcon>
        <label>
          <input type="file" {...field} {...props} />
          <Icon size={props.iconsize} color={props.iconColor || Colors.blackBody} />
        </label>
      </DivInputIcon>
    </>
  );
};
