var Todo = require('../models/Todo')

function createTodo(todo, cb) {
    var new_todo = new Todo({
        text: todo.text,
        order: todo.order,
        completed: (todo.completed || false),
        _list: todo._list,
        _user: todo._user
    })
    new_todo.save(function(err) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function editTodo(todo_id, todo, cb) {
    Todo.findByIdAndUpdate(todo_id, {
        text: todo.text,
        order: todo.order,
        _list: todo._list,
        completed: todo.completed
    }, {
        runValidators: true
    }, function(err, raw) {
        if (err) {
            return cb(err)
        }
        return (cb)
    })
}

function markTodo(todo_id, completed, cb) {
    Todo.findByIdAndRemove(todo_id, {
        completed: completed
    }, function(err, raw) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function removeTodo(todo_id, cb) {
    Todo.findByIdAndRemove(todo_id, function(err) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function removeTodoByList(list_id, cb) {
    Todo.remove({_list: list_id}, function(err, raw) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

module,exports = {
    createTodo,
    editTodo,
    markTodo,
    removeTodo,
    removeTodoByList
}
