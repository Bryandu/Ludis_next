import { createGlobalStyle } from 'styled-components';

export const Colors = {
  redPrimary: '#CF1020',
  redSecundary: '#DC143C',
  blackBackground: '#111111',
  blackBody: '#1c1c1c'
};

export default createGlobalStyle`
    @font-face {
        font-family: 'Androgyne';
        src: url('fonts/Androgyne/Androgyne.woff2') format('woff2'),
            url('fonts/Androgyne/Androgyne.woff') format('woff'),
            url('fonts/Androgyne/Androgyne.ttf') format('ttf'),
            url('fonts/Androgyne/Androgyne.eot') format('eot');
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Circular Std Book';
        src:url('fonts/Circular Std Book/Circular Std Book.woff2') format('woff2'),
            url('fonts/Circular Std Book/Circular Std Book.woff') format('woff'),
            url('fonts/Circular Std Book/Circular Std Book.ttf') format('ttf'),
            url('fonts/Circular Std Book/Circular Std Book.eot') format('eot');
        font-style: normal;
        font-display: swap;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Circular Std Book', 'Arial';
        list-style: none;
    }
    body{
        background: ${props => props.theme.background};
        color: ${props => props.theme.color};
    }
    
`;
