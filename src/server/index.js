var app = require('./app.js')
var http = require('http')

// Get the port from arguments
var port = Number(process.argv[2] || 8080)
app.set('port', port)

// Create a HTTP Server and pass the app to it
var server = http.createServer(app)
server.listen(port)

server.on('listening', function() {
	console.log('listening on port: ' + port)
})
server.on('error', function(err) {
	console.error(err)
})