import { ConnectionOptions } from 'typeorm';

const DATABASE_TYPE = 'postgres';
const DATABASE_ENTITIES = ['src/entities/**/**.postgres.ts'];
const connectionOptions: ConnectionOptions = {
  name: 'default',
  type: DATABASE_TYPE,
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: DATABASE_ENTITIES,
  synchronize: true,
  logging: true
};

console.log(connectionOptions);

export default connectionOptions;
