import gql from "graphql-tag";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;
