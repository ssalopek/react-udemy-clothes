import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`body {
    font-family: "Open Sans Condensed";
    padding: 20px 60px;

    //apply bellow if max-width is less than 800px
    @media screen and (max-width: 800px){
      padding: 10px;

    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  `;
