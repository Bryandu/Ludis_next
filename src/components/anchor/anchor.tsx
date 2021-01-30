import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

import { BtnAnchor } from './styles';

const Anchor = ({ ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={props.href} passHref>
      <BtnAnchor {...props}>{props.children}</BtnAnchor>
    </Link>
  );
};

export default Anchor;
