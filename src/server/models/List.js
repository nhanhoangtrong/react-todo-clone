var mongoose = require('mongoose')
var Schema = mongoose.Schema

var listSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	order: Number,
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	_todos: [{
		type: Schema.Types.ObjectId,
		ref: 'Todo'	
	}]
})

module.exports = mongoose.model('List', listSchema)