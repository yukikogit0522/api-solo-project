const doglistModel = require("./doglist/doglist.model");

const setupServer = () => {
  /* return configured express app */
  const express = require("express");
  const path = require("path");
  const database = require("./knex");

  const app = express();
  app.use(express.json());

  app.get("/api/dog_list", async (req, res) => {
    const answer = [];
    const dog_lists = await doglistModel.getAll();

    for (i = 0; i < dog_lists.length; i++) {
      answer.push(dog_lists[i]);
    }

    //const result = { dog_lists: array };
    res.send(answer);
  });

  return app;
};

module.exports = { setupServer };
