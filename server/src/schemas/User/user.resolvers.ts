import fetchMeController from "./controllers/fetchMe.controller";
import { IResolvers } from "src/types/graphql";
import loginUserController from "./controllers/loginUser.controller";
import createUserController from "./controllers/createUser.controller";

const resolvers: IResolvers = {
  Query: {
    fetchMe: fetchMeController,
  },

  Mutation: {
    createUser: createUserController,
    loginUser: loginUserController,
  },
};

export default resolvers;
