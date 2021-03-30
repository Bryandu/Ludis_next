import styled from 'styled-components';

import { Colors } from '../../styles/global';

interface Logo {
  fontsize?: string;
}

const Logo = styled.h1.attrs((props: Logo) => ({
  fontsize: props.fontsize || '24px'
}))`
  font-family: 'Androgyne';
  font-size: ${props => props.fontsize};
  font-weight: normal;
  color: ${Colors.redPrimary};
  padding-top: 5px;
`;

export default Logo;
