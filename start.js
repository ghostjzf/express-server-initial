const express = require("express");
const app = express();
const path = require("path");
const logger = require("./utils/log");
const bodyParser = require("body-parser");

app.use("/public", express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    logger.http(req);
    next();
});

app.use("/api", require("./apis/index.js"));
app.use("/", require("./router/index.js"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
