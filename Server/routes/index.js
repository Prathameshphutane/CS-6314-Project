var express = require('express');
var router = express.Router();
//const app = express()
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
//const auth = require('./middleware/auth');

const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");

var monk = require('monk');
const { response } = require('express');
var db = monk('localhost:27017/Airbnb');
var collection = db.get('signup');



router.get('/', function(req, res) {
	res.render('index', { title: 'Express'} );

});

//protected route
/*router.get('/welcome', auth, function(req, res) {
	res.json({ message: "Welcome!!" } );

});*/

router.post('/register', async(req, res) => {
	try{
		const {username, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		if(!(username && email && password)){

			res.status(422).json( { error: "All fields are required!" } );
		}
		else if(!regex.test(password)){
			res.status(422).json( { error: "Password must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character,at least one special character. The password must be five characters or longer" } );
		}
		else{

			collection.findOne({ email: email }, function(err, user){
				if (err) throw err;

				if (user){
					res.status(425).json({ error : "User already exists. Please login!"} );

				}
				else{
						let newUser = {
							username: username,
							email: email,
							password: hashedPassword

						}
						collection.insert(newUser, function(err, user){
					
                     		if (err) throw err;
					 		/*var token = jwt.sign({ user_id: user._id, email}, 'secretkey');

					 		if (token){
								user.token = token;

					 		}*/
					 		res.json(user);

						})
				}
			});	

		}
	}
	catch(err){
		console.log(err.stack);
	}

});

router.post('/login', async(req, res) => {
	
	
	try{
		const {email, password } = req.body;
		if(!(email && password)){

			res.status(422).json({ error: "All fields are required!" } );
		}
		const userData = await collection.findOne({ email: email });
		if(userData == null){

			res.status(425).json({ error: "User doesn't exist" } );

		}
		const isMatched = await bcrypt.compare(password, userData.password);
		
		console.log("req "+password);
		//const hashedPassword = await bcrypt.hash(password, 10)
		if(isMatched){
			res.status(200).json(userData);
		}
		else{
			res.status(420).json( {error: "User email or password is incorrect!" } );
		}
	}
	catch(err){
		console.log(err.stack);
		//res.status(420).json( {error: "User email or password is incorrect!" } );
	}

});



module.exports = router;