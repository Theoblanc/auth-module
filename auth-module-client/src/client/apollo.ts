import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  uri: "https://localhost:4000/graphql",
  cache: new InMemoryCache()
});

export default client;
