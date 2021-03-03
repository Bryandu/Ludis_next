import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

import { Colors } from '../../styles/global';

interface Spin extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const spin = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
`;

export const Spinner = styled.span<Spin>`
  display: block;
  width: 40px;
  height: 40px;
  margin: 20px 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-left-color: ${Colors.redSecundary};
  background: transparent;
  animation: ${spin} 700ms linear infinite;
`;
