const json_controller = require("./json-controller");

class DbController {
  fetch_data() {
    let data = json_controller.fetch_data();
    console.log(`DB-CONTROLLER:   ${data}`);
    return data;
  }
}

// Export the Helper class
module.exports = new DbController();
