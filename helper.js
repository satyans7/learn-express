class Helper {
  fetch_data() {
    let data = { page: "My Page" };
    console.log(`HELPER:   ${data}`);
    return data;
  }
}

// Export the Helper class
module.exports = new Helper();
