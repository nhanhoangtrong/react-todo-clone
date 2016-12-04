var auth = require('basic-auth')
var { getUserByUsername } = require('../controllers/user')

module.exports = {
	authenticate: function(req, res, next) {
		var credentials = auth(req)
		if (credentials) {
			getUserByUsername(credentials.name, function(err, user) {
				if (err) {
					// Some error occurs, we send the 401 - Unauthorized
					res.status(401).send()
				} else {
					if (credentials.pass === user.password) {
						// Username and password is valid
						req.user = user
						next()
					}
				}
			})
		} else {
			// If not credentials
			res.status(401).send()
		}
	}
}
