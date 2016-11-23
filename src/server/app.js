var express = require('express')
var path = require('path')
var app = express()
var users = require('./routes/users')
var todos = require('./routes/todos')

app.use(express.static(path.dirname(__dirname, 'static')))

app.use('/todos', todos)
app.use('/users', users)

app.get('/hello', function(req, res) {
	res.send("Hello World!")
})

module.exports = app