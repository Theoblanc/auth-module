// 모듈 임포트 절대경로 설정
import path from 'path';
import dotenv from 'dotenv';
import modulePath from 'app-module-path';
modulePath.addPath(path.join(__dirname, '../'));
dotenv.config({ path: path.join(__dirname, 'path/to/.env') });

// 모듈 임포트
import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { typeDefs, resolvers, context } from 'src/libraries/configApollo';
import { applyMiddleware } from 'graphql-middleware';
import connectionOptions from 'src/libraries/configTypeorm';

const HOST = process.env.BACKEND_HOST || 'localhost';
const PORT = process.env.BACKEND_PORT || 4000;

const server = new ApolloServer({
  context,
  schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
});
const app = express();
server.applyMiddleware({ app });

createConnection(connectionOptions)
  .then(() => {
    app.listen({ port: PORT }, () =>
      console.log(`listening - http://${HOST}:${PORT}${server.graphqlPath}`)
    );
  })
  .catch((errors) => console.log('errors', errors));
