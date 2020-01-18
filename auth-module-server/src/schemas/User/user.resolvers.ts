import { Resolvers } from "src/types/resolvers";
import User from "src/entities/Postgres/User/User.postgres";
import {
  getHashedPassword,
  getComparedPassword,
  createRefreshToken,
  createAccessToken
} from "src/libraries/security";
import { TokenModel, Return } from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    fetchMe: async (parent, args, { user: { id } }) =>
      await User.findOne({ where: { id } }),

    fetchUser: async (parent, { userId }) =>
      await User.findOne({ where: { id: userId } })
  },

  Mutation: {
    loginUser: async (parent, { email, password }): Promise<TokenModel> => {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error("Email is not exists");
      await getComparedPassword(password, user.password);

      const refreshToken = await createRefreshToken(user.id);
      const accessToken = await createAccessToken(refreshToken);
      return { accessToken, refreshToken };
    },

    createUser: async (parent, { email, password }): Promise<Return> => {
      const user = await User.findOne({ where: { email } });
      if (user) throw new Error("Email is already exists");

      const hashedPassword = await getHashedPassword(password);
      await User.create({ email, password: hashedPassword }).save();
      return { ok: true, error: null };
    }
  }
};

export default resolvers;
