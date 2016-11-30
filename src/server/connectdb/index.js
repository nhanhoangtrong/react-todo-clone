var mongoose = require('mongoose')
let options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    }
};
module.exports = mongoose.connect.bind(mongoose, 'mongodb://localhost:27017/todo-clone')
