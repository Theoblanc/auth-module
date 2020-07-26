import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      message
    }
  }
`;
