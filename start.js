const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/api", require("./apis/index.js"));
app.use("/", require("./router/index.js"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
