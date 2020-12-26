import React from "react";
import { Styles } from "../../styles/interfaces";
import { DivInput, InputComp } from "./styles";

const Input: React.FC<Styles> = ({ ...props }) => {
  return (
    <DivInput width={props.width} height={props.height}>
      <InputComp placeholder={props.placeholder} type={props.type} />
      {props.children}
    </DivInput>
  );
};

export default Input;
