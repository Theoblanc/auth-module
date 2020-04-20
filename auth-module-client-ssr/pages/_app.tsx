import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import Head from "next/head";

import { InMemoryCache } from "apollo-cache-inmemory";
import App from "next/app";
import GlobalStyle from "../styles/Globalstyles";

class MyApp extends App<any> {
  public render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <Head>
          <title>로그인 모듈</title>
        </Head>
        <ApolloProvider client={apollo}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  console.log("appProps", appProps);
  return { ...appProps };
};

export default withApollo(({ initialState }) => {
  console.log("initialState", initialState);
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    fetch,
    credentials: "same-origin",
    // 'include' 변경 후 검토필요 // Additional fetch() options like `credentials` or `headers`
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        // authorization:  `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: true,
  });
})(MyApp);
