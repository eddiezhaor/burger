var connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    insertOne: function(tableName, col, vals, cb) {
        var query = "INSERT INTO " + tableName;
        query += " (";
        query += col.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";
        connection.query(query, vals, function(err, result) {

            cb(err, result);
        })
    },
    updateOne: function(tableName, objColvals, condition, cb) {
        var query = "UPDATE " + tableName;
        query += " SET ";
        query += objToSql(objColvals);
        query += " WHERE ";
        query += condition;
        connection.query(query, function(err, result) {
            cb(err, result);
        })
    },
    selectAll: function(tableName, cb) {
        var query = "SELECT * ";
        query += "FROM ";
        query += tableName;
        connection.query(query, function(err, result) {
            cb(err, result);
        })

    }
}

module.exports = orm;