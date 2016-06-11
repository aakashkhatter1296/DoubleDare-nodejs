var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

//GET all users
router.get('/', function(req, res, next) {
  	User.find(function(err,user){
		if(err) {
			res.send(err);
		}

		res.json(user);
	});
});

router.get('/:id', function(req, res, next) {
  	User.findById(req.params.id, function(err,user){
		if(err) {
			res.send(err);
		}

		res.json(user);
	});
});

router.post('/create', function(req, res, next) {

	var newUser = new User({
		email : req.body.email,
		password : req.body.password,
		username : req.body.username
	});
	newUser.save(function(err){
		if(err) {
			res.send(err);
		}
		else {
			res.json({
				message : "User created successfully",
				data : newUser
			});
		}
	});
});

module.exports = router;
