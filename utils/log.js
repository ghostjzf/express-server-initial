const log4js = require("log4js");
const log4Json = require("../config/log4js.json");

log4js.configure(log4Json);

const logger = {
    error: function(error) {
        const log = log4js.getLogger("error");

        log.error(JSON.stringify(error));
    },
    info: function(data) {
        const log = log4js.getLogger("info");

        log.info(JOSN.stringify(data));
    },
    http: function(req) {
        const log = log4js.getLogger("http");
        const data = JSON.stringify(
            {
                url: req.url,
                method: req.method,
                query: req.query,
                body: req.body
            },
            null,
            2
        );

        log.info(data);
    }
};

module.exports = logger;
