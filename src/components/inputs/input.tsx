import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Colors } from '../../styles/global';
import { Erros } from '../forms/styleForms';
import { DivInput, InputComp } from './styles';

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
  height?: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconSize?: string;
  iconColor?: string;
  lineDown?: boolean;
}

export const Input = ({ icon: Icon, lineDown, ...props }: InputI) => {
  const [field, meta] = useField(props);
  return (
    <>
      <DivInput width={props.width} height={props.height}>
        <InputComp {...field} {...props} />
        {Icon && <Icon size={props.iconSize} color={props.iconColor || Colors.blackForeground} />}
      </DivInput>
      {meta.error && meta.touched && <Erros>{meta.error}</Erros>}
      {lineDown && <br />}
    </>
  );
};
