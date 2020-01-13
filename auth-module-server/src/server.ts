import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

const HOST = process.env.BACKEND_HOST;
const PORT = process.env.BACKEND_PORT;
const app = express();

const server = new ApolloServer({
  context,
  schema
});

server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`listening - http://${HOST}:${PORT}${server.graphqlPath}`)
);
