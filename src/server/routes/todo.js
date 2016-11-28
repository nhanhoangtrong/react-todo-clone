var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var Todo = require('../models/Todo')
var User = require('../models/User')
var bodyParser = require('body-parser')

router.use(bodyParser.json())

// TODO: using token for authentication

// Get all todos by user
router.get('/all', function(req, res, next) {
    // Get all todo by username
    var db = connectdb(function(err) {
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            Todo.find({_user: req.query.id}, function(err, todos) {
                if (err) {
                    console.error(err)
                    res.sendStatus(500)
                } else {
                    // Send all found todos to response
                    res.json(todos)
                }
                db.disconnect()
            })
        }
    })
})

// Create todo
router.post('/create', function(req, res, next) {
    var db = connectdb(function(err) {
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            var todo = new Todo({
                text: req.body.text,
                _user: req.body._id,
                order: req.body.order,
                completed: (req.body.completed || false)
            })
            todo.save(function(err, obj) {
                if (err) {
                    console.error(err)
                    res.sendStatus(400)
                } else {
                    res.status(200).send(obj)
                    db.disconnect()
                }
            })
        }
    })
})

module.exports = router
