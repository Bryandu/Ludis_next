import styled from 'styled-components';

interface Divinput {
  width?: string;
  height?: string;
}

export const InputComp = styled.input`
  color: #000000;
  background: transparent;
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  font-size: 1rem;
  padding-right: 3px;
  &::placeholder {
    color: #1c1c1c;
    font-size: 1rem;
  }
`;
export const DivInput = styled.div.attrs((props: Divinput) => ({
  width: props.width || '100%',
  height: props.height || '100%'
}))`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  color: ${props => props.theme.color};
  background: rgba(255, 255, 255, 0.5);
  width: ${props => props.width};
  height: ${props => props.height};
`;
