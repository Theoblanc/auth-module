import ApolloClient, { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});

export default client;
