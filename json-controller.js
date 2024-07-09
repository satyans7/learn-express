const helper = require("./helper");

class JsonController {
  fetch_data() {
    let data = helper.fetch_data();
    console.log(`JSON-CONTROLLER:   ${data}`);
    return data;
  }
}

// Export the Helper class
module.exports = new JsonController();
