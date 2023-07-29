const express = require("express");
const cors = require("cors");
const app = express();
let corsOptions = {
  origin: "http://localhost:8081"
};
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node.js with MySQL integration application." });
});

require("./app/routes/category.routes.js")(app);
require("./app/routes/note.routes.js")(app);
require("./app/routes/reminder.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
var server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = server;