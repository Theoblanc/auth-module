import { IResolvers } from 'src/types/graphql';
import loginController from './controllers/login.controller';
import signUpController from './controllers/signUp.controller';
import meController from './controllers/me.controller';

const resolvers: IResolvers = {
  Mutation: {
    login: loginController,
    signUp: signUpController
  },
  Query: {
    me: meController
  }
};

export default resolvers;
