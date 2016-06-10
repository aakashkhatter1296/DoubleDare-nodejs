var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	fcm_playerid : {
		type : String,
		default : "null"
	},
	accepted_dares : [{
		dare_id : String
	}],
	not_accepted_dares : [{
		dare_id : String
	}],
	completed_dares : [{
		dare_id : String
	}]
});

//Creating the model out of the schema
var User = mongoose.model('User', userSchema);

//Making the model available to our node app
module.exports = User;