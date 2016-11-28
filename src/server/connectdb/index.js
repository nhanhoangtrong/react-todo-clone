var mongoose = require('mongoose')
module.exports = mongoose.connect.bind(mongoose, 'mongodb://localhost:27017/todo-clone')
