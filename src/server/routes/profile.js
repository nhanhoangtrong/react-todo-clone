var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var User = require('../models/User')

router.get('/', function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.json(users)
		}
	})
})

router.get('/:username', function(req, res, next) {
	// If connect successfully, try to find user by username
	User.findOne({username: req.params.username}, function(err, user) {
		if (err) {
			// If have error, print and send "500 - Internal Server Error"
			console.error(err)
			res.sendStatus(500)
		} else {
			if (user) {
				// Check if user was founded, send as json
				res.json(user)
			} else {
				// "400 - Bad Request" reponse
				res.sendStatus(400)
			}
		}
	})
})

module.exports = router
