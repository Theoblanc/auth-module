export const typeDefs = ["type Result {\n  message: String!\n}\n\ntype TokenModel {\n  accessToken: String!\n  refreshToken: String\n}\n\ntype Mutation {\n  createAccessToken(refreshToken: String!): TokenModel\n  # User\n  loginUser(email: String!, password: String!): TokenModel!\n  createUser(email: String!, password: String!): Result!\n}\n\ntype Query {\n  # User\n  fetchMe: UserProfile!\n}\n\ntype Token {\n  id: String!\n  createdAt: String!\n  updatedAt: String!\n  accessedAt: String!\n  userId: String!\n}\n\nenum Role {\n  REGULAR\n  ADMIN\n}\n\ntype User {\n  id: String!\n  createdAt: String!\n  updatedAt: String!\n  email: String!\n  password: String!\n  role: Role!\n}\n\ntype UserProfile {\n  id: String!\n  createdAt: String!\n  updatedAt: String!\n  email: String!\n  # password: String!\n  role: Role!\n}\n\n"];
/* tslint:disable */

export interface Query {
  fetchMe: UserProfile;
}

export interface UserProfile {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  role: Role;
}

export type Role = "REGULAR" | "ADMIN";

export interface Mutation {
  createAccessToken: TokenModel | null;
  loginUser: TokenModel;
  createUser: Result;
}

export interface CreateAccessTokenMutationArgs {
  refreshToken: string;
}

export interface LoginUserMutationArgs {
  email: string;
  password: string;
}

export interface CreateUserMutationArgs {
  email: string;
  password: string;
}

export interface TokenModel {
  accessToken: string;
  refreshToken: string | null;
}

export interface Result {
  message: string;
}

export interface Token {
  id: string;
  createdAt: string;
  updatedAt: string;
  accessedAt: string;
  userId: string;
}

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password: string;
  role: Role;
}
