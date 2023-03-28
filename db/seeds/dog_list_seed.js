/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("dog_list").del();
  await knex("dog_list").insert([
    {
      id: 1,
      type: "プードル",
      country_of_origin: "フランス",
      size: "小型〜大型",
    },

    {
      id: 2,
      type: "セントバーナード",
      country_of_origin: "スイス",
      size: "超大型",
    },

    {
      id: 3,
      type: "オーストラリアンシェパード",
      country_of_origin: "アメリカ",
      size: "中型〜大型",
    },

    {
      id: 4,
      type: "パグ",
      country_of_origin: "中国",
      size: "小型",
    },

    {
      id: 5,
      type: "柴犬",
      country_of_origin: "日本",
      size: "小〜中型",
    },
  ]);
};
