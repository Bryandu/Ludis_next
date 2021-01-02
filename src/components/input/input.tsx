import { useField } from "formik";
import React from "react";
import { InputComp, DivInput } from "./styles";

export const Input = props => {
  const [field, meta] = useField(props);
  return (
    <>
      <DivInput>
        <InputComp {...field} {...props} height={props.hright} />
        {props.children}
      </DivInput>
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};
