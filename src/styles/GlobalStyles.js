import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base Styles */
  body {
    font-family: "Georgia", serif; /* Match elegant serif font */
    background-color: #f8f8f8; /* Light background */
    color: #333; /* Dark text for readability */
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;


