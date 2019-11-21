const Person = require('../models/person.js')


// 1)Create (post) person
const createPerson = function(req, res){
	const person = new Person(req.body)
	person.save().then(function(){
		return res.send(person)
	}).catch(function(error){
		return res.status(400).send({error})
	})
}

// 2)Read (get) all persons
const getPersons = function(req, res){
	Person.find({}).then(function(persons){
		res.send(persons)
	}).catch(function(error){
		res.statur(500).send({error})
	})
}

// 3)Read (get) a specific person
const getPerson = function(req, res){
	_id = req.params.id
	Person.findById(_id).then(function(person){
		if(!person){
			return res.send({error: 'Person not found'})
		}
		return res.send(person)
	}).catch(function(error){
		return res.status(404).send({error})
	})
}

// 4)Update (patch) a person
const updatePerson = function(req, res){
	const _id = req.params.id
	const updates = Object.keys(req.body)
	const allowedUpdates = ['name', 'mother', 'father']
	const isValidUpdate = update.every((update) => allowedUpdates.includes(update))

	if(!isValidUpdate){
		return res.status(400).send({
			error: 'Invalid update, only allowed to update: ' + allowedUpdates
		})
	}
	Person.findByIdAndUpdate(_id, req.body).then(function(person){
		if(!person){
			return res.status(404).send({})
		}
		return res.send(person)
	}).catch(function(error){
		res.status(500).send({error})
	})
}

// 5)Delete (delete) a person
const deletePerson = function(req, res){
	const _id = req.params.id
	Person.findByIdAndDelete(_id).then(function(person){
		if(!person){
			return res.status(404).send({})
		}
		return res.send(person)
	}).catch(function(error){
		res.status(505).send({error})
	})
}

module.exports = {
	createPerson,
	getPersons,
	getPerson,
	updatePerson,
	deletePerson
}
