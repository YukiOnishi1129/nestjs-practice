require('dotenv').config(); // eslint-disable-line

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/entities/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
