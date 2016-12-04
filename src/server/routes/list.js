var express = require('express')
var router = express.Router()
var {
    getList,
    getListsByUser,
    getListsByFolder,
    createList,
    editList,
    removeList
} = require('../controllers/list')
var { authenticate } = require('../middlewares')

router.route('/')
    .all(authenticate)
    .get(function(req, res) {
        // Get all list
        getListsByUser(req.user._id, function(err, lists) {
			if (err) {
				console.error(err)
				res.status(400).send()
			} else {
				res.status(200).json(lists)
			}
		})
    })
    .post(function(req, res, next) {
        // Create a folder and set current user as ownner
        req.body._user = req.user._id
        createList(req.body, function(err, list) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).json(list)
            }
        })
    })

router.route('/:list_id')
    .all(authenticate)
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
