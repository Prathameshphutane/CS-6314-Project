var express = require('express');
var router = express.Router();

var monk = require('monk');
var ObjectId = require('mongodb').ObjectID
var db = monk('localhost:27017/Airbnb');
var collection = db.get('reservations');





//show a reservation
router.get('/reservations/:id', function(req, res) {
	collection.find({ _id: req.params.id }, function(err, reservation){
		if (err) throw err;
	  	res.json(reservation);
	});
});

//show list of reservations for given user
router.get('/:customer_id/reservations', function(req, res) {
	collection.find({ customer_id: ObjectId(req.params.customer_id) }, function(err, reservation){
		if (err) throw err;
	  	res.json(reservation);
	});
});

//add a new property
router.post('/:customer_id/reservations/new', function(req, res) {
	collection.insert({
		property_id: ObjectId(req.body.property_id),
        host_id: ObjectId(req.body.host_id),
        customer_id: ObjectId(req.params.customer_id),
        reservation_dates: {
            start_date: req.body.reservation_dates.start_date,
            end_date: req.body.reservation_dates.end_date
        }
	}, function(err, reservation){
		if (err) throw err;
	  	res.json(reservation);
	});
});




// add reservation dates

router.post('/property', function(req, res) {
	collection.insert({
		property_id: ObjectId(req.body.singleBook.id),
		customer_id: ObjectId(req.params.customer_id),
        reservation_dates: {
            start_date: req.body.reservation.startDate,
            end_date: req.body.reservation.endDate
        }
	}, function(err, reservation){
		if (err) throw err;
	  	res.json(reservation);
	});
});





//delete a reservation
router.delete('/reservations/delete/:id', function(req, res) {
	collection.remove({ _id: req.params.id }, function(err, reservation){
		if (err) throw err;
	  	res.json(reservation);
	});
});






module.exports = router;