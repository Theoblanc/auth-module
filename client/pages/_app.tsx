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
// import getConfig from "next/config";
import React, { Fragment } from "react";
import { checkExpiredToken } from "../src/libraries/checkToken";

class MyApp extends App<any> {
  public render() {
    const { Component, pageProps, apollo } = this.props;
    const Layout: React.FC = Component.layout || Fragment;

    return (
      <>
        <Head>
          <title>로그인 모듈</title>
          <script>window.__APOLLO_STATE__ = JSON.stringify();</script>
        </Head>
        <ApolloProvider client={apollo}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </>
    );
  }
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default withApollo(({ initialState }) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    fetch,
    credentials: "same-origin"
  });

  const authLink = setContext(async (_, ctx) => {
    const accessToken = cookie.get("accessToken");
    const refreshToken = cookie.get("refreshToken");
    const token = await checkExpiredToken(accessToken, refreshToken);

    // console.log("token", token );

    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...ctx.headers,
        authorization: accessToken ? `Bearer ${accessToken}` : ""
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
})(MyApp);
