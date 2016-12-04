var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var Todo = require('../models/Todo')
var User = require('../models/User')
var {
    checkAuthenticate
} = require('../middlewares')
var {
    getTodo,
    getTodosByUser,
    createTodo,
    removeTodo,
    editTodo
} = require('../controllers/todo')

// TODO: using token for authentication

router.route('/')
    .all(checkAuthenticate, function(req, res, next) {
        next()
    })
    .get(function(req, res, next) {
        // Get all todos by user
        getTodosByUser(req.query.id, function(err, todos) {
            if (err) {
                console.error(err)
                res.sendStatus(400)
            } else {
                // Send all found todos to response
                res.status(200).json(todos)
            }
        })
    })
    .post(function(req, res, next) {
        // Create todo
        createTodo(req.body, function(err, todo) {
            if (err) {
                console.error(err)
                res.sendStatus(400)
            } else {
                res.status(200).send(todo)
            }
        })
    })

router.route('/mark/:todo_id')
    .put(function(req, res, next) {
        // Mark a todo as completed or not completed
        markTodo(req.params.todo_id, req.body.completed, function(err) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        })
    })

router.route('/:todo_id')
    .get(function(req, res, next) {
        // Get a todo
        getTodo(req.params.todo_id, function(err, todo) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).json(todo)
            }
        })
    })
    .put(function(req, res, next) {
        // update a todo
        editTodo(req.params.todo_id, req.body, function(err) {
            if (err) {
                console.error(err)
                res.status(400).send()
            } else {
                res.status(200).send()
            }
        })
    })
    .delete(function(req, res, next) {
        // Remove a Todo
        removeTodo(req.params.todo_id, function(err) {
            if (err) {
                console.error(err)
                res.sendStatus(500)
            } else {
                res.status(200).send()
            }
        })
    })

module.exports = router
