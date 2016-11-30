var express = require('express')
var path = require('path')
var app = express()
var user = require('./routes/user')
var todo = require('./routes/todo')
var profile = require('./routes/profile')
var connectdb = require('./connectdb')

connectdb()

app.use(express.static(path.dirname(__dirname, 'static')))

app.use('/api/todo', todo)
app.use('/api/user', user)
app.use('/api/profile', profile)

app.get('/hello', function(req, res) {
	res.send("Hello World!")
})

module.exports = app