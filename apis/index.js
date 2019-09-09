const express = require("express");
const router = express.Router();
const db = require("../utils/mysql");
const log = require("../utils/log");

router.get("/admin", (req, res) => {
    log(req);
    db.query("SELECT * FROM user", [], function(result, fields) {
        console.log("查询结果：");
        console.log(result);
    });

    res.json({ code: 200, data: "admin", msg: "ok" });
});

module.exports = router;
