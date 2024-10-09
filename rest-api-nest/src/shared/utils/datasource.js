const { DataSource } = require('typeorm');
const { join } = require('path');
require('dotenv').config();

const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, '/../../../', 'db/migrations/**/*{.ts,.js}')],
  synchronize: false,
  migrationsTableName: 'migrations_table',
  migrationsRun: false,
});

module.exports = connectionSource;
