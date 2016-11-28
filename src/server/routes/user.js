var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var User = require('../models/User.js')

router.use(bodyParser.json())
router.post('/create', function(req, res, next) {
	var db = mongoose.connect('mongodb://localhost:27017/todo-clone', function(err) {
		if (err) {
			console.error("connection failed", err)
			res.sendStatus(500)
		} else {
			// when successfully connect
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
					db.disconnect()
				} else {
					res.send(user)
					db.disconnect()
				}
			})
		}
	})
})

router.post('/update', function(req, res, next) {
	// Connect to database
	var db = mongoose.connect('mongodb://localhost:27017/todo-clone', function(err) {
		if (err) {
			console.error("connection failed", err)
			res.sendStatus(500)
		} else {
			// when successfully connect
			// try to get any match user
			User.update({username: req.body.username}, {
				email: req.body.email,
				is_admin: (req.body.is_admin || false)
			}, {
				runValidators: true
			},function(err, raw) {
				console.log(raw)
				if (err) {
					console.log('update user error', err)
					res.status(400).send(err.message)
				} else {
					res.sendStatus(200)
				}
				db.disconnect()
			})
		}
	})
})

router.post('/remove', function(req, res, next) {
	// Connect to database
	var db = mongoose.connect('mongodb://localhost:27017/todo-clone', function(err) {
		if (err) {
			console.error("connection failed", err)
			res.sendStatus(500)
		} else {
			// when successfully connect
			// try to get any match user
			User.remove({_id: req.body._id}, function(err, raw) {
				console.log(raw)
				if (err) {
					console.log('remove user error', err)
					res.status(400).send(err.message)
				} else {
					res.send("User deleted " + req.body.username)
				}
				db.disconnect()
			})
		}
	})
})

module.exports = router