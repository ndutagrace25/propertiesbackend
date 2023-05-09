exports.up = function (knex) {
    return knex.schema.createTable("houses", (table) => {
      table.increments();
      table.text("name");
      table.text("images");
      table.text("location");
      table.float("price");
      table.float("parking");
      table.float("bedrooms");
      table.text("details");
      table.text("security_hours");
      table.boolean("water_available");
      table.boolean("price_negotiable");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("houses");
  };
  