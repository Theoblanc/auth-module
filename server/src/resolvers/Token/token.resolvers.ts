import createAccessTokenController from "./controllers/createAccessToken.controller";
// import { IResolvers } from "src/types/graphql";

const resolvers = {
  Mutation: {
    createAccessToken: createAccessTokenController,
  },
};

export default resolvers;
