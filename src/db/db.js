
const mongoose = require('mongoose')
const connectionURL = ''//lo saco de mongo

mongoose.connect(connectionURL, {
	useNewUrlParser: true,
	useCreateIndex: true, 
	useUnifiedTopology: true
})

