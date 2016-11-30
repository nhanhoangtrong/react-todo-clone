var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var Todo = require('../models/Todo')
var User = require('../models/User')
var { checkAuthenticate } = require('../middlewares')

// TODO: using token for authentication

// Get all todos by user
router.get(checkAuthenticate, function(req, res, next) {
    Todo.find({_user: req.query.id}, function(err, todos) {
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            // Send all found todos to response
            res.json(todos)
        }
    })
})

// Create todo
router.post('/create', checkAuthenticate, function(req, res, next) {
    var todo = new Todo({
        text: req.body.text,
        _user: req.body._user,
        order: req.body.order,
        completed: (req.body.completed || false)
    })
    todo.save(function(err, obj) {
        if (err) {
            console.error(err)
            res.sendStatus(400)
        } else {
            res.status(200).send(obj)
        }
    })
})

// Remove Todo
router.delete('/remove', checkAuthenticate, function(req, res, next) {
    Todo.findByIdAndRemove(req.body._id, function(err, raw) {
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            if (raw) {
                
            } else {
                
            }
            res.status(200).send('Todo removed')
        }
    })
})

module.exports = router
