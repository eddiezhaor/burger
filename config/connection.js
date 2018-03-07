var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "119110",
    port: 3306,
    database: "burgers_db"
})

module.exports = connection;