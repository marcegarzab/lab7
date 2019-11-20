/*
npm init => package.json
npm install request => node_modules folder
npm install express => nothing
*/

const express = require('express')
const app = express()
require('./db/db.js')
const Person = require('./models/person.js')
const port = process.env.PORT || 3000

app.use(express.json())

//create
app.post('/persons', function(req,res){
	const person = new Person(req.body)
	person.save().then(function(){
		return res.send(person)
	}).catch(function(error){
		return res.send(400).send(error)
	})
})

//read
app.get('/persons', function(req,res){
	const person = new Person(req.body)
	person.save().then(function(person){
		return res.send(person)
	}).catch(function(error){
		return res.send(400).send(error)
	})
})

app.get('/persons:id', function(req,res){
	_id = req.params.id
	Person.findById(_id).then(function(person){
		if(!Person){
			returm res.status(404).send({})
		}
		res.send(person)
	}).catch(function(error){
		res.send(error)
	})
})

//update
app.patch('/persons:id', function(req,res){

})

//delete
app.delete('/persons:id', function(req,res){
	const _id = req.params.id
	Person.findByIdAndDelete(_id).then(function(person){
		if(!person){
			return res.status(404).send({})
		}
		return res.send(person)
	}).catch(function(error){
		res.status(505).send(error)
	})
})

app.listen(port, function() {
  console.log('Server up and running on port', port)
})
