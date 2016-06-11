var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/'}).single('upl');
var Dare = require('../models/dare.js');

router.post('/', function(req,res,next){
  upload(req,res,function(err){
    if(err) {
      res.send(err);
    }

    res.json(req.file);
    Dare.findById(req.body.dare_id, function(err, dare){
    	if(err) {
    		console.log("Error occured while finding dare");
    	}

    	dare.video_link = req.file.filename;
    	dare.save(function(err){
    		if(err) {
    			console.log("Error occured while saving the dare.")
    		}
    	});
    });

  });

});


module.exports = router;