import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      message
    }
  }
`;
