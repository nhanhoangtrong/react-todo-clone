var express = require('express')
var path = require('path')
var app = express()

// Database connection
var connectdb = require('./connectdb')

// Middlewares
var bodyParser = require('body-parser')

// All routes
var user = require('./routes/user')
var todo = require('./routes/todo')
var profile = require('./routes/profile')
var folder = require('./routes/folder')
var list = require('./routes/list')

connectdb()

app.use(express.static(path.dirname(__dirname, 'static')))

app.use('/api', bodyParser.json())

app.use('/api/todo', todo)
app.use('/api/user', user)
app.use('/api/profile', profile)
app.use('/api/folder', folder)
app.use('/api/list', list)

app.get('/hello', function(req, res) {
	res.send("Hello World!")
})

module.exports = app