

var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Airbnb');
var collection = db.get('user');
var ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {

  collection.findOne({ }, function(err, result){
    if (err) throw err;
    res.json(result);
});
});

module.exports = router;
