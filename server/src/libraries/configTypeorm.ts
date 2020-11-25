import { ConnectionOptions } from "typeorm";

const DATABASE_TYPE = "postgres";
const DATABASE_ENTITIES = ["src/entities/**/**.postgres.ts"];

const connectionOptions: ConnectionOptions = {
  type: DATABASE_TYPE,
  database: String(process.env.DATABASE_DATABASE || "postgres"),
  host: String(process.env.DATABASE_HOST || "localhost"),
  port: Number(process.env.DATABASE_PORT || 5432),
  username: String(process.env.DATABASE_USERNAME || "postgres"),
  password: String(process.env.DATABASE_PASSWORD || "1234"),
  entities: DATABASE_ENTITIES,
  synchronize: true,
  logging: true,
};

export default connectionOptions;
