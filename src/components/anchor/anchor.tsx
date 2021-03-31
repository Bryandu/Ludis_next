import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

import { AnchorText, BtnAnchor } from './styles';
interface Anchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  button?: boolean;
  hrefAnchor: string;
}
const Anchor = ({ button, hrefAnchor, ...props }: Anchor) => {
  return (
    <Link href={hrefAnchor} passHref>
      {button ? (
        <BtnAnchor {...props}>{props.children}</BtnAnchor>
      ) : (
        <AnchorText {...props}>{props.children}</AnchorText>
      )}
    </Link>
  );
};

export default Anchor;
