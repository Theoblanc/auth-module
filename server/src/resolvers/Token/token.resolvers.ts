import { Resolvers } from "src/types/resolvers";
import { createAccessToken } from "src/libraries/security";

const resolvers: Resolvers = {
  Mutation: {
    createAccessToken: async (parent, { refreshToken }, ctx) => {
      const accessToken = await createAccessToken(refreshToken, ctx.res);
      return { accessToken };
    },
  },
};

export default resolvers;
