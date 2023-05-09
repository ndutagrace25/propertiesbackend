const knex = require("./knex");

// === HUSTLER QUERIES ===

// fetch all hustlers
const getAllHouses = async (query) => {
  const knexQuery = knex("houses");
  if (query.start_date) {
    // get houses by date range specified
    knexQuery
      .where(knex.raw("??::date >= ?", ["created_at", query.start_date]))
      .where(knex.raw("??::date <= ?", ["created_at", query.end_date]));
  }
  return knexQuery;
};

// save house details
const create = async (house) => {
  return knex("houses").insert(house, "*");
};
// // update personnel's password
// const updatePassword = async (user) => {
//   return knex("personnels")
//     .where("email", user.email)
//     .update("password", user.password);
// };

module.exports = {
  getAllHouses,
  create,
};
