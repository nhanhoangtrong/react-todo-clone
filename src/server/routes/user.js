var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var { checkAdmin } = require('../middlewares')
var User = require('../models/User')
var { getUser, getAllUsers, createUser, editUser, removeUser, changeUserPassword } = require('../controllers/user')

router.route('/')
.get(function(req, res, next) {
	// Get all user
	getAllUsers(function(err, users) {
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
	createUser(req.body, function(err, user) {
		if (err) {
			console.error(err)
			res.status(400).send()
		} else {
			res.send(user)
		}
	})
})

router.route('/:user_id')
.get(function(req, res, next) {
	// Get user detail
	getUser(req.params.user_id, function(err, user) {
		if (err) {
			console.log(err)
			res.status(400).send()
		} else {
			res.status(200).json(user)
		}
	})
})
.put(function(req, res, next) {
	// Update a user
	editUser(req.params.user_id, req.body, function(err) {
		if (err) {
			console.log(err)
			res.status(400).send()
		} else {
			res.status(200).send()
		}
	})
})
.delete(function(req, res, next) {
	// Remove a user
	removeUser(req.params.user_id, function(err) {
		if (err) {
			console.log(err)
			res.status(400).send()
		} else {
			res.status(200).send()
		}
	})
})

module.exports = router
