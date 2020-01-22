import { createGlobalStyle } from "./Typed-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');

  * {
    box-sizing:border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }

  body{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      margin: 0;
      padding: 0;
      box-sizing:border-box;
  }
  div{
    box-sizing:border-box;

  }

`;
