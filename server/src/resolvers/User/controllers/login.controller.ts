import { IMutationResolvers } from 'src/types/graphql';
import User from 'src/entities/Postgres/User/User.postgres';
import { getComparedPassword } from 'src/libraries/security';
import authorizations from 'src/libraries/authorization';

const loginController: IMutationResolvers['login'] = async (_, args, ctx) => {
  const { email, password } = args;
  try {
    const user = await User.findOneOrFail({
      where: {
        email
      }
    });
    await getComparedPassword(password, user.password);

    const refreshToken = await authorizations().createRefreshToken(user.id);
    const accessToken = await authorizations().createAccessToken(refreshToken, ctx.res);

    return {
      accessToken,
      refreshToken
    };
  } catch (error) {
    throw new Error();
  }
};

export default loginController;
