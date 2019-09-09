const log4js = require("log4js");
const log4Json = require("../config/log4js.json");

log4js.configure(log4Json);

function log(req) {
    const logger = log4js.getLogger("request");

    logger.error(JSON.stringify({ query: req.query }));
}

module.exports = log;
