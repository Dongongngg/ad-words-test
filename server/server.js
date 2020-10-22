const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./route/settings");

const app = express();

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// call sysc()
const db = require("./models/");
db.sequelize.sync();

//set routes
app.use("/api/settings", router);
app.use("/", (req, res) => res.send("success!!!!!!!"));

//set port
const PORT = 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
