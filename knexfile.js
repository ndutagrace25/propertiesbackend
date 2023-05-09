// Update with your config settings.
require("dotenv").config();
const types = require("pg").types;

const TIMESTAMPTZ_OID = 1184;
const TIMESTAMP_OID = 1114;
types.setTypeParser(TIMESTAMPTZ_OID, (val) => val);
types.setTypeParser(TIMESTAMP_OID, (val) => val);

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      connectionString: process.env.DB_CONNECTION,
      ssl: {
        rejectUnauthorized: false
      }
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectionString: process.env.DB_CONNECTION,
      ssl: {
        rejectUnauthorized: false
      }
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
