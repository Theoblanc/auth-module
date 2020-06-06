import { IResolvers } from "src/types/graphql";
import loginController from "./controllers/login.controller";
import signupController from "./controllers/signup.controller";

const resolvers: IResolvers = {
  Query: {},

  Mutation: {
    login: loginController,
    signup: signupController,
  },
};

export default resolvers;
