import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { getAccessTokenFromHeader, getUserFromAccessToken } from "./security";

const allTypes: any = fileLoader("src/types/*.graphql");
const allResolvers: any = fileLoader("src/schemas/**/*.resolvers.ts");

const typeDefs: any = mergeTypes(allTypes);
const resolvers: any = mergeResolvers(allResolvers);

const context = async ({ req }: any) => {
  const accessToken = getAccessTokenFromHeader(req.headers);
  const user = await getUserFromAccessToken(accessToken);
  return { ...req, user };
};

export { typeDefs, resolvers, context };
