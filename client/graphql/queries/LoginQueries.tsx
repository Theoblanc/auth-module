import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      message
    }
  }
`;
