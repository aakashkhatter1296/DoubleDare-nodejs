var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Dare = require('../models/dare.js');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {

    var str = file.originalname;
    str = str.replace(/\s/g,'-');
    cb(null,  str );

  }
});
var upload = multer({ storage: storage }).single('upl');

router.post('/', function(req,res,next){
  upload(req,res,function(err){
    if(err) {
      res.send(err);
    }
    //req.filename = req.filename + '.mp4';
    //req.path = req.path + '.mp4';

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

    res.json(req.file);

  });

});


module.exports = router;