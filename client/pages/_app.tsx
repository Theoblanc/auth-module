import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import Head from "next/head";

import { InMemoryCache } from "apollo-cache-inmemory";
import App from "next/app";
import GlobalStyle from "../styles/Globalstyles";
import cookie from "js-cookie";
import getConfig from "next/config";

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

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  console.log("appProps", appProps);
  return { ...appProps };
};

export default withApollo(({ initialState }) => {
  const {
    NEXT_PUBLIC_BACKEND_HOST,
    NEXT_PUBLIC_BACKEND_PORT,
    NEXT_PUBLIC_BACKEND_GRAPHQL_ENDPOINT
  } = getConfig().publicRuntimeConfig;
  console.log("initialState", initialState);
  const httpLink = createHttpLink({
    uri: `http://${NEXT_PUBLIC_BACKEND_HOST}:${NEXT_PUBLIC_BACKEND_PORT}/${NEXT_PUBLIC_BACKEND_GRAPHQL_ENDPOINT}`,
    fetch,
    credentials: "same-origin"
  });

  const authLink = setContext((_, { headers }) => {
    const accessToken = cookie.get("accessToken");
    const refreshToken = cookie.get("refreshToken");

    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : ""
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: true
  });
})(MyApp);
