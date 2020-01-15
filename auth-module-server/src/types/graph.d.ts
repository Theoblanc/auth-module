export const typeDefs = ["scalar Date\n\ntype Return {\n  ok: Boolean!\n  error: String\n}\n\ntype Query {\n  # User\n  fetchMe: UserProfile!\n}\n\ntype Mutation {\n  # User\n  createUser(email: String!, password: String!): Return!\n}\n\n# ### User ####\ntype User {\n  id: ID\n  email: String\n  # password: String\n  createdAt: Date\n  updatedAt: Date\n}\n\ntype UserProfile {\n  name: String\n  picture: String\n  phone: Int\n  school: String\n  birthday: Int\n  gender: String\n  userId: String\n  createdAt: Date\n  updatedAt: Date\n}\n\n"];
/* tslint:disable */

export interface Query {
  fetchMe: UserProfile;
}

export interface UserProfile {
  name: string | null;
  picture: string | null;
  phone: number | null;
  school: string | null;
  birthday: number | null;
  gender: string | null;
  userId: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export type Date = any;

export interface Mutation {
  createUser: Return;
}

export interface CreateUserMutationArgs {
  email: string;
  password: string;
}

export interface Return {
  ok: boolean;
  error: string | null;
}

export interface User {
  id: string | null;
  email: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
