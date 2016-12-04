var express = require('express')
var router = express.Router()
var { getUserByUsername } = require('../controllers/user')
var { authenticate } = require('../middlewares')

router.get('/:username', authenticate, function(req, res, next) {
	getUserByUsername(req.params.username, function(err, user) {
		if (err) {
			console.error(err)
			res.status(400).send()
		} else {
			if (user) {
				// Check if user was founded, send as json
				res.status(200).json(user)
			} else {
				// "400 - Bad Request" reponse
				res.status(400).send()
			}
		}
	})
})

module.exports = router
