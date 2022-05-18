import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

// Creating Global Style for the entire portfolio
const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    fill: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro',sans-serif;
}

`;
export default GlobalStyle;
