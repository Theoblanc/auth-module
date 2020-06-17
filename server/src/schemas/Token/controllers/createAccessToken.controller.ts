import { IMutationResolvers } from "src/types/graphql";
import { createAccessToken } from "src/libraries/security";

const createAccessTokenController: IMutationResolvers["createAccessToken"] = async (
  parent,
  { refreshToken },
  ctx
): Promise<{ accessToken: string }> => {
  const accessToken = await createAccessToken(refreshToken, ctx.res);
  return { accessToken };
};

export default createAccessTokenController;
