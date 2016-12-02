var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	order: Number,
	due: Date,
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	_list: {
		type: Schema.Types.ObjectId,
		ref: 'List',
		required: true
	}
})

todoSchema.pre('save', function(next) {
	next()
})

todoSchema.methods.setDueDay = function(date) {
	this.due = date
}

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
