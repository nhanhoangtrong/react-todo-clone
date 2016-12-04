var express = require('express')
var router = express.Router()
var Folder = require('../models/Folder')
var {
    getFolder,
    getFoldersByUser,
    createFolder,
    editFolder,
    removeFolder
} = require('../controllers/folder')

router.route('/')
.get(function(req, res, next) {
	// Get all folder
	var user_id = req.query._user
	getFoldersByUser(user_id, function(err, folders) {
		if (err) {
			console.error(err)
			res.status(500).send()
		} else {
			res.status(200).send(folders)
		}
	})
})
.post(function(req, res, next) {
	// Create a folder
	createFolder(req.body, function(err, folder) {
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
	getFolder(req.params.folder_id, function(err, folder) {
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
	editFolder(req.params.folder_id, req.body, function (err) {
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
	// First we need to find and remove all related lists
	removeFolder(req.params.folder_id, function(err) {
		if (err) {
			console.error(err)
			res.status(400).send()
		} else {
			res.status(200).send()
		}
	})

})

module.exports = router
