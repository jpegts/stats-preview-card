import { createGlobalStyle } from "styled-components";

export const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1110),
  phone: customMediaQuery(600),
};

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: #333333;
    font-size: 16px;
  }
`;

export default GlobalStyle;
