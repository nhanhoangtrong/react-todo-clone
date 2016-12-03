var User = require('../models/List')
var { removeListByUser } = require('./list')
var { removeFolderByUser } = require('./folder')

function createUser(user, cb) {
    var new_user = new User({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        password: user.password,
        is_admin: (user.is_admin || false),
        email: user.email
    })
    new_user.save(function(err) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function editUser(user_id, user, cb) {
    User.findByIdAndUpdate(user_id, {
        first_name: user.first_name,
        last_name: user.last_name,
        is_admin: (user.is_admin || false)
    }, function(err, raw) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function changeUserPassword(user_id, new_password, cb) {
    User.findByIdAndUpdate(user_id, {
        password: new_password
    }, {
        runValidators: true
    }, function(err) {
        if (err) {
            return cb(err)
        }
        return cb()
    })
}

function removeUser(user_id, cb) {
    // First remove all folder by this user
    removeFolderByUser(user_id, function(err) {
        if (err) {
            return cb(err)
        }
        // Then remove all lists created by this folder that not belong to any folder
        removeListByUser(user_id, function(err) {
            if (err) {
                return cb(err)
            }
            // finnaly call the callback
            return cb
        })
    })
}
