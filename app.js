const express = require("express");
const app = express();
require("./dbconnection").connectiondb();
const port = 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
