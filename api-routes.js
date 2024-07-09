const helper = require("./helper");

module.exports = function (app) {
  app.get("/text", (req, res) => {
    res.send("Welcome");
  });

  app.get("/json", (req, res) => {
    res.json({ page: "JSON page" });
  });

  app.get("/fetch-data", (req, res) => {
    let data = helper.fetch_data();
    res.json(data);
  });
};
