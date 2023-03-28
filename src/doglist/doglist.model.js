const knex = require("../knex");
// const { validProps, requiredProps } = require("../util/validation");

// const validateProps = validProps(["id", "first_name", "last_name", "email"]);

// const validateRequired = requiredProps(["last_name", "first_name"]);

const DOG_LIST_TABLE = "dog_list";

module.exports = {
  DOG_LIST: DOG_LIST_TABLE,

  /**
   * Get all
   * @param {number} limit - The max number of people to return.
   * @return {Promise<Array>} A promise that resolves to an array people
   */
  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        type: "type",
        country_of_origin: "country_of_origin",
        size: "size",
      })
      .from(DOG_LIST_TABLE)
      .limit(limit)
      .then((val) => {
        return val;
      });
  },
};
