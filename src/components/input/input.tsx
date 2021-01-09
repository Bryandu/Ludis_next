import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons/lib";
import { InputComp, DivInput } from "./styles";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
  height?: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconSize?: string;
  iconColor?: string;
  lineDown?: boolean;
}

export const Input: React.FC<Input> = ({ icon: Icon, lineDown, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <DivInput width={props.width} height={props.height}>
        <InputComp {...field} {...props} />
        {Icon && <Icon size={props.iconSize} color={props.iconColor} />}
      </DivInput>
      {lineDown && <br />}
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};
