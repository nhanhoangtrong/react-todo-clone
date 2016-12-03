var Folder = require('../models/Folder')
var List = require('../models/List')
var Todo = require('../models/Todo')
var { removeListByFolder } = require('./list')

function getFolder(folder_id, cb) {
    Folder.findById(folder_id, function(err, folder) {
        if (err) {
            return cb(err, null)
        }
        return cb(null, folder)
    })
}

function getFoldersByUser(user_id, cb) {
    Folder.find({_user: user_id}, function(err, folders) {
        if (err) {
            return cb(err, null)
        }
        return cb(null, folders)
    })
}

function createFolder(folder, cb) {
    var new_folder = new Folder({
        title: folder.title,
        order: folder.order,
        _user: folder._user
    })
    new_folder.save(function(err, folder) {
        if (err) {
            return cb(err, null)
        }
        return cb(null, folder)
    })
}

function editFolder(folder_id, folder, cb) {
    Folder.findByIdAndUpdate(folder_id, {
        title: folder.title,
        order: folder.order
    }, { runValidators: true}, function(err) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function removeFolder(folder_id, cb) {
    // First we need to find all related lists and remove them
    removeListByFolder(folder_id, function(err) {
        if (err) {
            return cb(err)
        }
        Folder.findByIdAndRemove(folder_id, function(err, raw) {
            if (err) {
                return cb(err)
            }
            return cb()
        })
    })
}

function removeFolderByUser(user_id, cb) {
    // Find all folders created by this user
    Folder.find({_user: user_id}, function(err, folders) {
        if (err) {
            return cb(err)
        }
        // Then remove all folder's lists
        for (let i in folders) {
            removeListByFolder(folders[i]._id, function(err) {
                if (err) {
                    return cb(err)
                }
            })
        }
        return cb()
    })
}

module.exports = {
    getFolder,
    getFoldersByUser,
    createFolder,
    editFolder,
    removeFolder,
    removeFolderByUser
}
