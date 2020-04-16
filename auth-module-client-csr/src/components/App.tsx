import React from "react";
import client from "../client/Apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./Routes";
import { GlobalStyle } from "../styles/Global-styles";
import { ThemeProvider } from "../styles/Typed-components";
import theme from "../styles/Theme";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
