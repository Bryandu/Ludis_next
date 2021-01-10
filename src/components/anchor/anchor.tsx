import Link from "next/link";
import React from "react";
import { BtnAnchor } from "./styles";

const Anchor = ({ ...props }) => {
  return (
    <Link href={props.href} passHref>
      <BtnAnchor {...props}>{props.children}</BtnAnchor>
    </Link>
  );
};

export default Anchor;
