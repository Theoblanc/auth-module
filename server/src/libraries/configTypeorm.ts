import { ConnectionOptions } from "typeorm";

const DATABASE_TYPE = "postgres";
const DATABASE_ENTITIES = ["src/entities/**/**.postgres.ts"];
const connectionOptions: ConnectionOptions = {
  type: DATABASE_TYPE,
  database: String(process.env.DATABASE_DATABASE),
  host: String(process.env.DATABASE_HOST),
  port: Number(process.env.DATABASE_PORT),
  username: String(process.env.DATABASE_USERNAME),
  password: String(process.env.DATABASE_PASSWORD),
  entities: DATABASE_ENTITIES,
  synchronize: true,
  logging: true,
};

export default connectionOptions;
