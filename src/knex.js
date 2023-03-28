//knexの設定ファイルの読み込み
const config = require("../knexfile");
//knexモジュールと設定が格納されている定数configも同時に読み込む
const knex = require("knex")(config);

module.exports = knex;
