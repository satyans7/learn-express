const controller = require("./controller");

module.exports = function (app) {
  app.get("/text", (req, res) => {
    res.send("Welcome");
  });

  app.get("/json", (req, res) => {
    res.json({ page: "JSON page" });
  });

  app.get("/fetch-data", (req, res) => {
    let data = controller.fetch_data();
    console.log(`API-ROUTES:   ${JSON.stringify(data)}`);
    res.json(data);
  });
};
