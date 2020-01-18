import { Resolvers } from "src/types/resolvers";
import { createAccessToken } from "src/libraries/security";

const resolvers: Resolvers = {
  Mutation: {
    createAccessToken: async (parent, { refreshToken }) => {
      const accessToken = await createAccessToken(refreshToken);
      return { accessToken };
    }
  }
};

export default resolvers;
