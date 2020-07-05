import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
  * {
    box-sizing: border-box;

  }
  body {
      margin: 0;
      padding: 0;
  }
  a{
    text-decoration: none;
    color: #313131;
  }
`;

export default GlobalStyle;
