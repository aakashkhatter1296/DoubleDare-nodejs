var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './uploads/'}).single('upl');

router.post('/', function(req,res,next){
  upload(req,res,function(err){
    if(err) {
      res.send(err);
    }

    res.json(req.file);
  });

});


module.exports = router;