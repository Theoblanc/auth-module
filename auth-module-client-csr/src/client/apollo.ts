import ApolloClient, { InMemoryCache } from "apollo-boost";
import jwtDecode from "jwt-decode";
import { Operation } from "apollo-link";

// Instantiate required constructor fields

const cache = new InMemoryCache();

interface ApolloClientOptions {
  uri: string;
}

const apolloClientOptions: ApolloClientOptions = {
  uri: "http://localhost:4000/graphql" // local 주소
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

        console.log(exp);

        if (Date.now() < (exp - 600) * 1000) {
          return access_token;
        }
      } catch (e) {
        console.log(e);
      }
    }

    //만료 access token

    const res = await fetch(apolloClientOptions.uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operationName: "token",
        query: `
          mutation createAccessToken(
            $refreshToken: String!
          ) {
            token(
              refreshToken: $refreshToken
            ) {
              access_token
            }
          }
        `,
        variables: {
          refreshToken: refresh_token
        }
      })
    });

    const { data } = await res.json();
    console.log("123data", data);
    const token = data.token.access_token;
    await localStorage.setItem("access_token", token);
    return token;
  }
};

const client = new ApolloClient({
  uri: apolloClientOptions.uri,
  cache: cache,
  clientState: {
    resolvers
  },
  request: async (operation: Operation) => {
    let token: String | undefined;
    try {
      token = await getToken();
      console.log("token", token);
    } catch (e) {
      console.log(e);
    }
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

export default client;
