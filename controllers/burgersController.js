var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

// router.post("/",function(req,res){
//     var req.
//     burger.create()
// })
router.get("/", function(req, res) {


    res.render("index");
})
router.post("/api/burger", function(req, res) {
    var burgerName = req.body;
    burger.insertOne([burgerName.name, burgerName.devoured], function(err, data) {
        if (err) throw err;
        res.json(data.insertId);
    })
})

router.put("/api/burger/:data", function(req, res) {
    var condition = "id=" + req.params.data;
    burger.updateOne({ devoured: 1 }, condition, function(err, data) {
        if (err) throw err;
        res.send("status updated!")
    })
})

module.exports = router;