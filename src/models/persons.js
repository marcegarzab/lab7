
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	age:{
		type: Number,
		require: true
	},
	born:{
		type: Number,
		required: true,
		unique: true
	},
	timeline:{
		type: String,
		required: true,
		maxLength: 2,
	},
	alliegance:{

	},
	playedBy:{
		type: String,
		require: true
	},
	titles:{

	},
	father:{
		type: String,
		require: true
	},
	mother:{
		type: String,
		require: true
	},
	spouse:{
		type: String,
		require: true
	}
})

const Person = mongoose.model('Person', userSchema)

module.exports = Person

const JonSnow = new Person({
	"name": "Jon Snow",
	"age": 20,
	"born": "283",
	"timeline": "AC",
	"alliegance": ["House Stark", "The Night's Watch"],
	"playedBy" : "Kit Harrington",
	"titles": ["Lord Commander of The Night's Watch", "King of The North", "Lord Crow"],
	"father": "Ned Stark",
	"mother": "unknown",
	"spouse": ""
})
const EddardStark = new Person({
	"name": "Eddard Stark",
	"age": 35,
	"born": "263",
	"timeline": "AC",
	"alliegance": ["House Stark"],
	"playedBy" : "Sean Bean",
	"titles": ["Lord of Winterfell", "Warden of the North", "Hand of the King"],
	"father": "Rickard Stark",
	"mother": "Lyanna Stark",
	"spouse": "Catelyn Stark"
})
JonSnow.save().then(function(data){}).catch(function(error){})
EddardStark.save().then(function(data){}).catch(function(error){})

