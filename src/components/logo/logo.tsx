import styled from "styled-components";

const Logo = styled.h1.attrs((props: any) => ({
  fontsize: props.fontsize || "24px",
}))`
  font-family: "Androgyne";
  font-size: ${props => props.fontsize};
  font-weight: normal;
  color: #cf1020;
`;

export default Logo;
