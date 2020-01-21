import { gql } from "apollo-boost";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String) {
    loginUser(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String) {
    loginUser(email: $email, password: $password) {
      ok
      error
    }
  }
`;
