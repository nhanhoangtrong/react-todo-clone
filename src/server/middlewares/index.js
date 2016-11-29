var connectdb = require('../connectdb')

module.exports = {
	checkAdmin: function(req, res, next) {
		next()
	},
	checkAuthenticate: function(req, res, next) {
		console.log("Check Authenticate", req.body._user)
		next()
	}
}