const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	age:{
		type: Number,
		require: true
	},
	occupation:{
		type: String,
		required: true
	},
	characteristics:
		[String],
	friends:
		[String],
	father:{
		type: String,
		require: true
	},
	mother:{
		type: String,
		require: true
	},
	playedBy:{
		type: String,
		require: true
	}
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person