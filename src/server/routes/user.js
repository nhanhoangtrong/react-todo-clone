var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var { checkAdmin } = require('../middlewares')
var User = require('../models/User')

router.post('/create', function(req, res, next) {
	// try to get any match user
	User.find({}, function(err, users) {
		console.log(users)
		// while (users.hasNext()) {
		// 	console.log(users.next())
		// }
	})
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		is_admin: (req.body.is_admin || false)
	})
	user.save(function(err) {
		if (err) {
			console.error("user save error", err)
			res.status(400).send(err.message)
		} else {
			res.send(user)
		}
	})
})

router.put('/update', function(req, res, next) {
	// try to get any match user
	User.update({username: req.body.username}, {
		password: req.body.password,
		email: req.body.email,
		is_admin: (req.body.is_admin || false)
	}, {
		runValidators: true
	},function(err, raw) {
		if (err) {
			console.log('update user error', err)
			res.status(400).send(err.message)
		} else {
			res.sendStatus(200)
		}
	})
})

router.delete('/remove', function(req, res, next) {
	// try to get any match user
	User.findByIdAndRemove(req.body._id, function(err, raw) {
		if (err) {
			console.log('remove user error', err)
			res.status(400).send(err.message)
		} else {
			res.send("User deleted " + req.body.username)
		}
		db.disconnect()
	})
})

module.exports = router
