import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

import { AnchorText, BtnAnchor } from './styles';

interface Anchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  button?: boolean;
}
const Anchor = ({ button, ...props }: Anchor) => {
  return (
    <Link href={props.href} passHref>
      {button ? (
        <BtnAnchor {...props}>{props.children}</BtnAnchor>
      ) : (
        <AnchorText {...props}>{props.children}</AnchorText>
      )}
    </Link>
  );
};

export default Anchor;
