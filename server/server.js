const express = require("express");
const app = express();
const cors = require("cors");
const CsbInspector = require("csb-inspector");
CsbInspector();

const { reportRequest } = require("../middleware/middleware");

app.use(reportRequest);
app.use(cors());
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;