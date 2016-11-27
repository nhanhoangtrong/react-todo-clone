var mongoose = require('mongoose')
var Schema = mongoose.Schema

var folderSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	order: Number,
	_lists: [
		{
			type: Schema.Types.ObjectId,
			ref: 'List'
		}
	]
})

module.exports = mongoose.model('Folder', folderSchema)