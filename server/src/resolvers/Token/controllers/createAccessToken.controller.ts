import { IMutationResolvers } from "src/types/graphql";
import authorizations from "src/libraries/authorization";

const createAccessTokenController: IMutationResolvers["createAccessToken"] = async (
  parent,
  { refreshToken },
  ctx
): Promise<{ accessToken: string }> => {
  const accessToken = await authorizations().createAccessToken(
    refreshToken,
    ctx.res
  );
  return { accessToken };
};

export default createAccessTokenController;
