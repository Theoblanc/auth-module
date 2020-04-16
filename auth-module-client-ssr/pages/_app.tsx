import withApollo from "next-with-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

export default withApollo(
  ({ initialState }) => {
    const httpLink = createHttpLink({
      uri: "http://localhost:4000/graphql",
      fetch,
      credentials: "same-origin", // 'include' 변경 후 검토필요 // Additional fetch() options like `credentials` or `headers`
    });

    return new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
