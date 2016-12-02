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
			res.sendStatus(400)
		} else {
			res.status(200).json(folder)
		}
	})
})

router.route('/:folder_id')
.get(function(req, res, next) {
	// Request a folder
	Folder.findById(req.params.folder_id, function(err, folder) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			res.status(200).json(folder)
		}
	})
})
.put(function(req, res, next) {
	// Update a folder
	Folder.findByIdAndUpdate(req.params.folder_id, {
		title: req.body.title,
		order: req.body.order
	}, function(err, raw) {
		if (err) {
			console.error(err)
			res.sendStatus(500)
		} else {
			console.log(raw)
			res.status(200).send()
		}
	})
})
.delete(function(req, res, next) {
	// Delete a folder
	Folder.findByIdAndRemove(req.params.folder_id, function(err, raw) {
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