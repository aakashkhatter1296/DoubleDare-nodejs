var express = require('express');
var router = express.Router();

var Dare = require('../models/dare.js');

//GET all dares
router.get('/',function(req,res,next) {
	Dare.find(function(err,dare){
		if(err) {
			res.send(err);
		}

		res.json(dare);
	});
});

//GET dare by id
router.get('/:id',function(req,res,next){
	Dare.findById(req.params.id, function(err,dare){
		if(err) {
			res.send(err);
		}

		res.json(dare);
	});
});

//POST to create a dare
router.post('/create', function(req,res,next){
	
	var newDare = new Dare({
		statement : req.body.statement,
		challenged_by : req.body.challenged_by,
		challenged_to : req.body.challenged_to,
		deadline_completion : req.body.deadline_completion,
		sample_giffy : req.body.sample_giffy
	});

	newDare.save(function(err){
		if(err) {
			res.send(err);
		}
		else {
			res.json({
				message : "Dare saved successfully",
				data : newDare
			});
		}
	})
});

router.post('/upvote/', function(req,res,next){
	var obj = {
		user_id : req.body.user_id
	};
	Dare.findOneAndUpdate({_id : req.body.dare_id}, { $push : {obj} },function(err,dare){
		if(err) {
			res.send(err);
		}

		
		dare.save(function(err){
			if(err) {
				res.send(err);
				console.log("Error while saving dare.");
			}

			else {
				res.json({
					message : "Upvoted successfully",
					data : dare
				});
			}
		});
		console.log('upvotes = ' + dare.upvotes);
	});
});


module.exports = router;