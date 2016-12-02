var express = require('express')
var router = express.Router()
var List = require('../models/List')

router.route('/')
.get(function(req, res) {
	// Get all list
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
			// console.log(raw)
			res.status(200).json(list)
		}
	})
})

router.route('/:list_id')
.get(function(req, res, next) {
	// Get a list
	var _list = req.params.list_id
	List.findById(_list, function(err, list) {
		if (err) {
			console.error(err)
			res.status(400).send()
		} else {
			res.status(200).json(list)
		}
	})
})
.put(function(req, res, next) {
	// Update a list
	var _list = req.params.list_id
	List.findByIdAndUpdate(_list, {
		title: req.body.title,
		order: req.body.order,
		_folder: req.body._folder
	}, {
		runValidators: true
	}, function(err, raw) {
		if (err) {
			console.error(err)
			res.status(400).send()
		} else {
			res.status(200).send()
		}
	})
})
.delete(function(req, res, next) {
	// Remove a list
	var _list = req.params.list_id
	List.findByIdAndRemove(_list, function(err, raw) {
		if (err) {
			console.error(err)
			res.status(400).send()
		} else {
			res.status(200).send()
		}
	})
})

module.exports = router