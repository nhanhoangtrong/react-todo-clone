var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.dirname(__dirname, 'static')))

app.get('/hello', function(req, res) {
	res.send("Hello World!")
})

module.exports = app