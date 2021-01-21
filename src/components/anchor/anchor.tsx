import Link from "next/link";
import React from "react";
import { AnchorText, BtnAnchor } from "./styles";

const Anchor = ({ ...props }) => {
  return (
    <Link href={props.href} passHref>
      <AnchorText {...props}>{props.children}</AnchorText>
    </Link>
  );
};

export default Anchor;
