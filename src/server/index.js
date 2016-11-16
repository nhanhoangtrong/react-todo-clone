var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.dirname(__dirname)))

app.get('/', function(req, res) {
	
})

app.listen(Number(process.argv[2] || 8080))