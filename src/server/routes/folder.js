var express = require('express')
var router = express.Router()
var Folder = require('../models/Folder')

router.route('/')
.get(function(req, res) {
	// Get all folder
	Folder.find({}, function(err, folders) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.status(200).json(folders)
		}
	})
})
.post(function(req, res, next) {
	// Create a folder
	var folder = new Folder({
		title: req.body.title,
		_user: req.body._user,
		order: req.body.order
	})
	folder.save(function(err, raw) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.status(200).send()
		}
	})
})

module.exports = router