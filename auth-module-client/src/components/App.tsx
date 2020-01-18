import React from "react";
import client from "../client/apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./Routes";
import { GlobalStyle } from "../styles/global-styles";
import { ThemeProvider } from "../styles/typed-components";
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
