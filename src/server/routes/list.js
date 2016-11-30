var express = require('express')
var router = express.Router()
var List = require('../models/List')

router.route('/')
.get(function(req, res) {
	// Get all folder
	List.find({}, function(err, lists) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.status(200).json(lists)
		}
	})
})
.post(function(req, res, next) {
	// Create a folder
	var list = new List({
		title: req.body.title,
		_user: req.body._user,
		_folder: req.body._folder,
		order: req.body.order
	})
	list.save(function(err, raw) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			console.log(raw)
			res.status(200).send()
		}
	})
})

module.exports = router