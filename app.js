const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

require("./api-routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
