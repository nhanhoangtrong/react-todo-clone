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
var {
    authenticate
} = require('../middlewares')

router.route('/')
    .all(authenticate)
    .get(function(req, res, next) {
        // Get all folder
        getFoldersByUser(req.user._id, function(err, folders) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).send(folders)
            }
        })
    })
    .post(function(req, res, next) {
        // Create a folder
        req.body._user = req.user._id
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
    .all(authenticate)
    .get(function(req, res, next) {
        // Request a folder
        getFolder(req.params.folder_id, function(err, folder) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).json(folder)
            }
        })
    })
    .put(function(req, res, next) {
        // Update a folder
        editFolder(req.params.folder_id, req.body, function(err) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        })
    })
    .delete(function(req, res, next) {
        // Remove current folder by this user
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
