var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var { checkAdmin } = require('../middlewares')
var User = require('../models/User')

router.route('/')
.get(function(req, res, next) {
	// Get all user
	User.find({}, function(err, users) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.status(200).json(users)
		}
	})
})
.post(function(req, res, next) {
	// Create a new user
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

router.route('/:user_id')
.get(function(req, res, next) {
	// Get user detail
	User.findById(req.params.user_id, function(err, users) {
		if (err) {
			console.log(err)
			res.status(400).send()
		} else {
			res.status(200).json(users)
		}
	})
})
.put(function(req, res, next) {
	// Update a user
	User.findByIdAndUpdate(req.params.user_id, {
		password: req.body.password,
		email: req.body.email,
		is_admin: (req.body.is_admin || false)
	}, {
		runValidators: true
	}, function(err, raw) {
		if (err) {
			console.log('update user error', err)
			res.status(400).send(err.message)
		} else {
			res.sendStatus(200)
		}
	})
})
.delete(function(req, res, next) {
	// Remove a user
	User.findByIdAndRemove(req.params.user_id, function(err, raw) {
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
