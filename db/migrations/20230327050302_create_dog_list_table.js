/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dog_list", function (table) {
    table.increments("id").primary();
    table.string("types", 32).notNullable();
    table.string("country_of_origin", 32).notNullable();
    table.string("size", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("dog_list");
};
