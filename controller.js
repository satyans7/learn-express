const db_controller = require("./db-controller");

class Controller {
  fetch_data() {
    let data = db_controller.fetch_data();
    console.log(`CONTROLLER:   ${data}`);
    return data;
  }
}

// Export the Helper class
module.exports = new Controller();
