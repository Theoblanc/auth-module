import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import jwtDecode from "jwt-decode";

// Instantiate required constructor fields

const cache = new InMemoryCache();

interface IProps {
  uri: string
}

const apolloClientOptions:IProps = {
  uri: "http://pickqa-backend.pickqa.com:4000" // 서버 주소
  // uri: "http://10.0.2.2:4000" // 로컬 주소
};

interface Resolvers {
  [key: string]: {
    [field: string]: (
      rootValue?: any,
      args?: any,
      context?: any,
      info?: any
    ) => any;
  };
}

const resolvers: Resolvers = {
  Mutation: {
    logUserIn: (_, { access_token }, { cache }) => {
      localStorage.setItem("access_token", access_token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      console.log("로그인 하였습니다.");

      return null;
    },

    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("access_token");
      window.location.href = "/";
      cache.writeData({
        data: {
          isLoggedIn: false
        }
      });
      console.log("로그아웃 하셨습니다.");
      return null;
    }
  }
};

const getToken = async () => {
  const refresh_token = await localStorage.getItem("refresh_token");

  if (refresh_token) {
    const access_token = await localStorage.getItem("access_token");

    if (access_token) {
      try {
        const { exp } = jwtDecode(access_token);

        if (Date.now() < (exp - 600) * 1000) {
          return access_token;
        }
      } catch (e) {
        console.log(e)
      }
    }

    const res = await fetch(apolloClientOptions.uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operationName: "token",
        query: `
          mutation token(
            $token: String!
          ) {
            token(
              grant_type: "refresh_token",
              refresh_token: $token
            ) {
              access_token
            }
          }
        `,
        variables: {
          token: refresh_token
        }
      })
    });

    const { data } = await res.json();
    const token = data.token.access_token;
    await localStorage.setItem("access_token", token);
    return token;
  }

const client = new ApolloClient({
  uri: apolloClientOptions.uri,
  cache: cache,
  resolvers,
  queryDeduplication: false,
  request: async (operation: any) => {
    let access_token: String;
    try {
      access_token = await getToken();
    } catch (e) {
      console.log(e);
    }
    operation.setContext({
      headers: {
        authorization: access_token ? `Bearer ${access_token}` : ""
      }
    });
  }
});

export default client;
