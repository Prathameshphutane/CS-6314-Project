var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Airbnb');
var collection = db.get('favourites');
var ObjectId = require('mongodb').ObjectID;

//list all favorites or show a favorite
router.get('/', function(req, res) {
  console.log(req.body);
  console.log("here");
    if(req.body.favoriteId ){
		console.log("here");
        collection.findOne({ _id: req.body.favoriteId }, function(err, result){
            if (err) throw err;
            res.json(result);
        });
    }
	else if(req.body.userId){
		collection.findOne({ user_id: req.body.userId }, function(err, result){
            if (err) throw err;
            res.json(result);
        });
	}
    else{
	collection.find({}, function(err, favorite){
		if (err) throw err;
		console.log(favorite);
		// res.render('index', { favorites: results } );
		res.json(favorite);
	});
    }
});

//add a new favorite
router.post('/', function(req, res) {
	//req.body is used to read form input
	console.log(req.body);
	collection.insert({ 
		user_id : ObjectId(req.body.userId),
		property_id : ObjectId(req.body.propertyId)
	}, function(err, favorite){
		if (err) throw err;
		// if insert is successfull, it will return newly inserted object
	  	//res.json(video);
		res.json(favorite);
	});
});
  




//update an existing favorite
router.put('/', function(req, res, next) {
	collection.update({_id: req.body.favoriteId}, {
		$set: {
			user_id : req.body.userId,
			property_id : req.body.propertyId
		}
	}, function(err, favorite) {
		if(err) throw err;
		// if insert is successful, it will return a new video object
		res.json(favorite);
	});
});

//delete a favorite
router.delete('/',function(req,res){
  collection.remove(
    {_id: req.body.favoriteId},
    function(err){
      if(!err){
        res.send(req.body.favoriteId);
      }
      else{
        res.send(err);
      }
    }
  )
});




module.exports = router;