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
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	order: Number,
	due: Date
})

todoSchema.pre('save', function(next) {
	next()
})

todoSchema.methods.setDueDay = function(Date date) {
	this.due = date
}

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo