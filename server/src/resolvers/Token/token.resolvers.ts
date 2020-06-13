import authorizations from 'src/libraries/authorization';
import { IResolvers } from 'src/types/graphql';

const resolvers: IResolvers = {
  Mutation: {
    createAccessToken: async (parent, args, ctx) => {
      const { refreshToken } = args;
      const accessToken = await authorizations().createAccessToken(refreshToken, ctx.res);
      return { accessToken };
    }
  }
};

export default resolvers;
