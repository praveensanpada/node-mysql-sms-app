var mysql = require("mysql")

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sms_app"
});

module.exports = conn;