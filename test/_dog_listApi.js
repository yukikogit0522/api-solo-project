const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const config = require("../knexfile");
//const { request } = require("express");
const knex = require("knex")(config);
const { setupServer } = require("../src/server.js");

//describe("dog API server", () => {
const server = setupServer();
let request;
//beforeEach(() => {
request = chai.request(server).keepOpen();
//});
describe("GET /api/dog_list", () => {
  it("全IDが取得できる", async () => {
    const res = await request.get("/api/dog_list");
    res.should.be.json;
    const expect = [
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
    ];
    JSON.parse(res.text).should.deep.equal(expect);
  });
});

//});
