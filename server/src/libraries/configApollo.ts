import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import authorizations from "./authorization";

const allTypes: any = fileLoader("src/types/*.graphql");
const allResolvers: any = fileLoader("src/schemas/**/*.resolvers.ts");

const typeDefs: any = mergeTypes(allTypes);
const resolvers: any = mergeResolvers(allResolvers);

const context = async ({ req }: any) => {
  const accessToken = await (await authorizations()).getAccessTokenFromHeader(
    req.context
  );
  const user = await (await authorizations()).getUserFromAccessToken(
    accessToken
  );
  return { ...req, user };
};

export { typeDefs, resolvers, context };
