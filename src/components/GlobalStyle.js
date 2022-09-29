import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    list-style: none;
    border: none;
}
textarea, input, select {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

`;

export default GlobalStyle;
