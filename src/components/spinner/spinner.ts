import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

import { Colors } from '../../styles/global';

interface Spin extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  size?: string;
}

const spin = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
`;

export const Spinner = styled.span<Spin>`
  display: block;
  width: ${props => (props.size ? props.size : '40px')};
  height: ${props => (props.size ? props.size : '40px')};
  border-radius: 50%;
  border: 2px solid transparent;
  border-left-color: ${Colors.redSecondary};
  background: transparent;
  animation: ${spin} 500ms linear infinite;
`;
