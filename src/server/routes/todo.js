var express = require('express')
var router = express.Router()
var connectdb = require('../connectdb')
var Todo = require('../models/Todo')
var User = require('../models/User')
var bodyParser = require('body-parser')
var { checkAuthenticate } = require('../middlewares')

router.use(bodyParser.json())

// TODO: using token for authentication

// Get all todos by user
router.get('/all', checkAuthenticate, function(req, res, next) {
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
router.post('/create', checkAuthenticate, function(req, res, next) {
    var db = connectdb(function(err) {
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
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
                    db.disconnect()
                }
            })
        }
    })
})

// Remove Todo
router.delete('/remove', checkAuthenticate, function(req, res, next) {
    // connect to database
    var db = connectdb(function(err) {
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            Todo.findByIdAndRemove(req.body._id, function(err, raw) {
                if (err) {
                    console.error(err)
                    res.sendStatus(500)
                } else {
                    if (raw) {
                        console.log(raw)   
                    } else {
                        
                    }
                    res.status(200).send('Todo removed')
                }
                db.disconnect()
            })
        }
    })
})

module.exports = router
