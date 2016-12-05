var express = require('express')
var router = express.Router()
var {
    getUser,
    getAllUsers,
    createUser,
    editUser,
    removeUser,
    changeUserPassword
} = require('../controllers/user')
var { authenticate } = require('../middlewares')

// This route only accessible by admin
router.route('/')
	.all(authenticate, function(req, res, next) {
		if (req.user.is_admin) {
			next()
		} else {
			// Generate a 405 - Method Not Allowed status
			res.status(405).send()
		}
	})
    .get(function(req, res, next) {
        // Get all user
        getAllUsers(function(err, users) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).json(users.map(function(user) {
                    return user.toJSON()
                }))
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
                res.send(user.toJSON())
            }
        })
    })

router.route('/:user_id')
	.all(authenticate)
    .get(function(req, res, next) {
        // Get user detail
		if (req.user._id === req.params.user_id || req.user.is_admin) {
	        getUser(req.params.user_id, function(err, user) {
	            if (err) {
	                console.log(err)
	                res.status(400).send()
	            } else {
	                res.status(200).json(user.toJSON())
	            }
	        })
		}
    })
    .put(function(req, res, next) {
        // Update a user if only this user is admin or update itself
        if (req.user._id === req.params.user_id || req.user.is_admin) {
			editUser(req.params.user_id, req.body, function(err) {
	            if (err) {
	                console.log(err)
	                res.status(400).send()
	            } else {
	                res.status(200).send()
	            }
	        })
		}
    })
    .delete(function(req, res, next) {
        // Remove a user if current user is admin
        if (req.user.is_admin) {
            removeUser(req.params.user_id, function(err) {
                if (err) {
                    console.log(err)
                    res.status(400).send()
                } else {
                    res.status(200).send()
                }
            })
        }
    })

module.exports = router
