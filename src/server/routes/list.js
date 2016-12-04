var express = require('express')
var router = express.Router()
var List = require('../models/List')
var Todo = require('../models/Todo')
var {
    getList,
    getListsByUser,
    getListsByFolder,
    createList,
    editList,
    removeList
} = require('../controllers/list')

router.route('/')
    .get(function(req, res) {
        // Get all list
        var user_id = req.query._user
        getListsByUser(user_id, function(err, lists) {
			if (err) {
				console.error(err)
				res.status(500).send()
			} else {
				res.status(200).send(lists)
			}
		})
    })
    .post(function(req, res, next) {
        // Create a folder
        createList(req.body, function(err, list) {
            if (err) {
                console.error(err)
                res.sendStatus(500)
            } else {
                res.status(200).json(list)
            }
        })
    })

router.route('/:list_id')
    .get(function(req, res, next) {
        // Get a list
        getList(req.params.list_id, function(err, list) {
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
        editList(req.params.list_id, req.body, function(err) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        })
    })
    .delete(function(req, res, next) {
        removeList(req.params.list_id, function(err) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        })
    })

module.exports = router
