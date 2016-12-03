var Todo = require('../models/Todo')
var List = require('../models/List')
var { removeTodoByList } = require('./todo')

function createList(list, cb) {
    var new_list = new List({
        title: list.title,
        order: list.order,
        _user: list._user,
        _folder: list._folder
    })
    new_list.save(function(err) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function editList(list_id, list, cb) {
    List.findByIdAndUpdate(list_id, {
        title: list.title,
        order: list.order,
        _folder: list._folder
    }, {
        runValidators: true
    }, function(err, raw) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function removeList(list_id, cb) {
    // First we remove all related todos
    removeTodoByList(list_id, function(err) {
        if (err) {
            return cb(err)
        }
        // Then we remove the list
        List.findByIdAndRemove(list_id, function(err) {
            if (err) {
                return cb(err)
            }
            return cb()
        })
    })
}

function removeListByFolder(folder_id, cb) {
    // Find all list
    List.find({_folder: folder}, function(err, lists) {
        if (err) {
            return cb(err)
        }
        for (var i in lists) {
            removeList(lists[i]._id, function(err) {
                if (err) {
                    return cb(err)
                }
            })
        }
        return cb()
    })
}

function removeListByUser(user_id, cb) {
    // Find all lists created by this user
    List.find({_user: user_id}, function(err, lists) {
        if (err) {
            return cb(err)
        }
        for (let i in lists) {
            removeList(lists[i]._id, function(err) {
                if (err) {
                    return cb(err)
                }
            })
        }
        return cb()
    })
}

module.exports = {
    createList,
    editList,
    removeList,
    removeListByFolder,
    removeListByUser
}
