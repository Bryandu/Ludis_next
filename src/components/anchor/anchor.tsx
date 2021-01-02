import Link from "next/link";
import React from "react";
import { BtnAnchor } from "./styles";
interface Hprops {
  href?: string;
}

const Anchor: React.FC<Hprops> = ({ ...props }) => {
  return (
    <Link href={props.href} passHref>
      <BtnAnchor {...props}>{props.children}</BtnAnchor>
    </Link>
  );
};

export default Anchor;
