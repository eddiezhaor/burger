var orm = require("../config/orm");

var burger = {
    insertOne: function(vals, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], vals, function(err, res) {
            cb(err, res);
        })

    },
    updateOne: function(objColvals, condition, cb) {
        orm.updateOne("burgers", objColvals, condition, function(err, res) {
            cb(err, res);
        });
    },
    selectAll: function(cb) {
        orm.selectAll("burgers", function(err, res) {
            cb(err, res);
        })
    }
}

module.exports = burger;