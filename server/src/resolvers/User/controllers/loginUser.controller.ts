import User from "src/entities/Postgres/User/User.postgres";
import { IMutationResolvers, ITokenModel } from "src/types/graphql";
import { getComparedPassword } from "src/libraries/security";
import authorizations from "src/libraries/authorization";

const loginUserController: IMutationResolvers["loginUser"] = async (
  _,
  args,
  ctx
): Promise<ITokenModel> => {
  const { email, password } = args;
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Email is not exists");
  await getComparedPassword(password, user.password);

  const refreshToken = await authorizations().createRefreshToken(user.id);
  const accessToken = await authorizations().createAccessToken(
    refreshToken,
    ctx.res
  );
  return { accessToken, refreshToken };
};

export default loginUserController;
