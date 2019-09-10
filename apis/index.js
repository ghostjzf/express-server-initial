const express = require("express");
const router = express.Router();
const db = require("../utils/mysql");

router.get("/admin", (req, res) => {
    db.query("SELECT * FROM user", [], function(result, fields) {
        console.log("查询结果：");
        console.log(result);
    });

    res.json({ code: 200, data: "admin", msg: "ok" });
});

module.exports = router;
