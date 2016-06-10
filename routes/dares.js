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
		challanged_by : req.body.challanged_by,
		challanged_to : req.body.challanged_to,
		deadline_acceptance : req.body.deadline_acceptance,
		deadline_completion : req.body.deadline_completion,
		sample_giffy : req.body.sample_giffy,
		video_link : req.body.video_link,
		completed : req.body.completed,
		accepted : req.body.accepted,
		upvotes : req.body.upvotes
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


module.exports = router;