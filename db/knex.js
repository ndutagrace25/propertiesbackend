const environment = process.env.NODE_ENV || "development";

const config = require("../knexfile");
const environmentConfig = config[environment];
const knex = require("knex");
const connection = knex(environmentConfig);

// try {
//   const res = await connection.migrate.latest()
//   console.log(`Batch ${res[0]} run: ${res[1].length} migrations`)
//   if (res[1].length > 0) {
//     console.log(res[1].join("\n"));
//   } else {
//     console.log("Already up to date");
//   }
// } catch (error) {
//   console.log("Unable to run migrations")
// }
module.exports = connection;
