var express = require('express');
var router = express.Router();
//const multer = require('multer');
//const upload = multer({dest: 'uploads/'});

var monk = require('monk');
var ObjectId = require('mongodb').ObjectID
var db = monk('localhost:27017/Airbnb');
var collection = db.get('properties');
var reservecollection= db.get('reservation');

//list all properties

router.get('/property', function(req, res) {
	collection.find({}, function(err, properties){
		if (err) throw err;
	  	res.json(properties);
	});
});

//show a property
router.get('/:id', function(req, res) {
	collection.find({ _id: req.params.id }, function(err, property){
		if (err) throw err;
	  	res.json(property);
	});
});

//add a new property
router.post('/', function(req, res) {
	collection.insert({
		title: req.body.title,
		description: req.body.description,
		amenities: req.body.amenities,
		location: req.body.location,
		cleaningfee: req.body.cleaningfee,
		servicefee: req.body.servicefee,
		nightlyfee: req.body.nightlyfee,
		bedrooms: req.body.bedrooms,
		img_url: req.body.img_url,

	}, function(err, property){
		if (err) throw err;
	  	res.json(property);
	});
});

//update a property
router.patch('/:id', function(req, res, next) {
	collection.update({ _id: req.params.id }, { $set: req.body}, {upsert: true},  function(err, property){
		if (err) throw err;
	  	res.json(property);
	});
});

//delete a property
router.delete('/delete/:id',function(req,res){
	collection.remove(
	  {_id: req.params.id},
	  function(err){
		if(!err){
		  res.send(req.params.id);
		}
		else{
		  res.send(err);
		}
	  }
	)
});
/*router.post('/api/image',upload.single('image'),(req, res) => {
	console.log(req.file)
	if(!req.file)
	{
	  res.send({code: 500, msg: 'err'})
	}
	else {
	  res.send({code: 200, msg: 'upload success'})
	}
  });*/
  router.post('/property/:id', function(req, res) {
	// console.log("here");
	// console.log(reservcollection);
	// collection.findone({ _id: req.params.id }, function(err, property){
	// 	if (err) throw err;
	//   	res.json(property);
	// });
	reservecollection.insert({
        reservation_dates: {
            start_date: req.body.reservation.startDate,
            end_date: req.body.reservation.endDate
        }
	}, function(err, reservation){
		//console.log(err)
		if (err) throw err;
		//console.log("this")
	  	res.json(reservation);
	});
});


module.exports = router;