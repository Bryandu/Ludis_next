import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

import { AnchorText, BtnAnchor } from './styles';
interface Anchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  button?: boolean;
}
const Anchor = ({ button, href, ...props }: Anchor) => {
  return (
    <Link href={`${href}`} passHref>
      {button ? (
        <BtnAnchor data-testid="anchor_button" {...props}>
          {props.children}
        </BtnAnchor>
      ) : (
        <AnchorText data-testid="anchor_text" {...props}>
          {props.children}
        </AnchorText>
      )}
    </Link>
  );
};

export default Anchor;
