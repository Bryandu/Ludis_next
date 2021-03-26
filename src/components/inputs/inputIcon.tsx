import { useField } from 'formik';
import Image from 'next/image';
import { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Colors } from '../../styles/global';
import { DivInputIcon } from './styles';

interface InputIconI extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  iconsize?: string;
  iconColor?: string;
  src?: string;
  width: string | number;
  height: string | number;
}

export const InputIcon = ({ icon: Icon, src, width, height, ...props }: InputIconI) => {
  const [field] = useField(props);
  return (
    <>
      <DivInputIcon>
        <label>
          <input type="file" {...field} {...props} />
          {Icon && <Icon size={props.iconsize} color={props.iconColor ?? Colors.blackBody} />}
          {src && <Image width={width} height={height} src={src} />}
        </label>
      </DivInputIcon>
    </>
  );
};
