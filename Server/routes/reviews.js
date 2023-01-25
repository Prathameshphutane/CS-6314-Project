var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express ' });
});
*/
var monk = require('monk');

//var db = monk('localhost:27017/vidzy');
//var collection = db.get('vid');
var ObjectId = require('mongodb').ObjectID
var db = monk('localhost:27017/Airbnb');
var collection = db.get('review');




router.get('/', function(req, res) {
	collection.find({}, function(err, results){
		if (err) throw err;
		//res.render('index', {Review: results } );
		res.json(results);
	});
});

// router.get('/addreview', function(req, res) {
// 	res.render('new');

// });



//insert
// router.post('/viewreview', function(req, res) {
// 	//req.body is used to read form input
// 	collection.insert({ 
// 		reviewer_first_name: req.body.reviewer_first_name,
// 		reviewer_last_name: req.body.reviewer_last_name,
// 		comment:req.body.comment
// 	}, function(err, video){
// 		if (err) throw err;
// 		// if insert is successfull, it will return newly inserted object
// 	  	//res.json(video);
// 		res.redirect('/welcomeCustomer');
// 	});
// });





router.post('/', function(req, res) {
    collection.insert({
        reviewer_first_name: req.body.reviewer_first_name,
        reviewer_last_name: req.body.reviewer_last_name,
        rating: req.body.rating,
        comment: req.body.comment

   }, function(err, property){
        if (err) throw err;
          res.json(property);
    });
});




module.exports = router;