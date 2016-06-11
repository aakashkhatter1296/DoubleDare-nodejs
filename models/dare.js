var mongoose = require('mongoose');

var dareSchema = new mongoose.Schema({
	statement : {
		type : String,
		required : true
	},
	challenged_by : {
		type : String,
		required : true	
	},
	challenged_to : {
		type : String,
		required : true
	},
	deadline_acceptance : {
		type : String,
		default : 2
	},
	deadline_completion : {
		type : String,
		required : true
	},
	sample_giffy : {
		type : String,
		required : true
	},
	video_link : {
		type : String
	},
	completed : {
		type : Boolean,
		default : false
	},
	accepted : {
		type : Boolean,
		default : false
	},
	upvotes : {
		type : Number,
		default : 0
	},
	bids : [{
		user_id : String,
		bid_amount : Number,
		will_win : Boolean
	}],
	comments : [{
		user_id : String,
		comment_value : String
	}]

});

//Creating the model out of the schema
var Dare = mongoose.model('Dare', dareSchema);

//Making the model available to our node app
module.exports = Dare;