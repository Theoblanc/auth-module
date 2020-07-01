// 모듈 임포트 절대경로 설정
import path from "path";
import modulePath from "app-module-path";
modulePath.addPath(path.join(__dirname, "../"));

// 모듈 임포트
import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { createConnection } from "typeorm";
import { typeDefs, resolvers, context } from "src/libraries/configApollo";
import { applyMiddleware } from "graphql-middleware";
import connectionOptions from "src/libraries/configTypeorm";

const HOST = process.env.BACKEND_HOST;
const PORT = process.env.BACKEND_PORT;

const app = express();
const server = new ApolloServer({
  context,
  schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers })),
});
server.applyMiddleware({ app });
createConnection(connectionOptions)
  .then(() => {
    app.listen({ port: PORT }, () =>
      console.log(`listening - http://${HOST}:${PORT}${server.graphqlPath}`)
    );
  })
  .catch((error) => console.log("error", error));
