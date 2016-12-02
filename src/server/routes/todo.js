var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var Todo = require('../models/Todo')
var User = require('../models/User')
var { checkAuthenticate } = require('../middlewares')

// TODO: using token for authentication

router.route('/')
.all(checkAuthenticate, function(req, res, next) {
    next()
})
.get(function(req, res, next) {
    // Get all todos by user
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
.post(function(req, res, next) {
    // Create todo
    var todo = new Todo({
        text: req.body.text,
        _list: req.body._list,
        _user: req.body._user,
        order: req.body.order,
        due: req.body.due,
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

router.route('/:todo_id')
.get(function(req, res, next) {
    Todo.findById(req.params.todo_id, function(err, todo) {
        if (err) {
            console.error(err)
            res.status(400).send()
        } else {
            res.status(200).json(todo)
        }
    })
})
.put(function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.todo_id, {
        text: request.body.text,
        order: request.body.order,
        due: request.body.due,
        _list: req.body._list
    }, {
        runValidators: true
    },function(err, raw) {
        if (err) {
            console.error(err)
            res.status(400).send()
        } else {
            res.status(200).send()
        }
    })
})
.delete(function(req, res, next) {
    // Remove Todo
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
