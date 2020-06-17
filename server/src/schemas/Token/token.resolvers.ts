import createAccessTokenController from "./controllers/createAccessToken.controller";
import { IResolvers } from "src/types/graphql";

const resolvers: IResolvers = {
  Mutation: {
    createAccessToken: createAccessTokenController,
  },
};

export default resolvers;
