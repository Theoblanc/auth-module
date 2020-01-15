// Module Absolute Path
import path from "path";
import modulePath from "app-module-path";
modulePath.addPath(path.join(__dirname, "../"));

import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { typeDefs, resolvers, context } from "src/libraries/configApollo";
import { applyMiddleware } from "graphql-middleware";
import Permissions from "src/libraries/permissions";

const HOST = process.env.BACKEND_HOST;
const PORT = process.env.BACKEND_PORT;
const app = express();

const server = new ApolloServer({
  context,
  schema: applyMiddleware(
    makeExecutableSchema({ typeDefs, resolvers }),
    Permissions
  )
});

server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`listening - http://${HOST}:${PORT}${server.graphqlPath}`)
);
