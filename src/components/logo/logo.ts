import styled from 'styled-components';

interface Logo {
  fontsize?: string;
}

const Logo = styled.h1.attrs((props: Logo) => ({
  fontsize: props.fontsize || '24px'
}))`
  font-family: 'Androgyne';
  font-size: ${props => props.fontsize};
  font-weight: normal;
  color: #cf1020;
  padding-top: 5px;
`;

export default Logo;
