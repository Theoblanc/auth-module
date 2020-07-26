import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import authorizations from "./authorization";

const allTypes: any = fileLoader("src/types/*.graphql");
const allResolvers: any = fileLoader("src/resolvers/**/*.resolvers.ts");

const typeDefs: any = mergeTypes(allTypes);
const resolvers: any = mergeResolvers(allResolvers);

const context = async ({ req }: any) => {
  const accessToken = await authorizations().getAccessTokenFromHeader(req);

  console.log("accessToken", accessToken);
  const user = await authorizations().getUserFromAccessToken(accessToken);
  return { ...req };
};

export { typeDefs, resolvers, context };
