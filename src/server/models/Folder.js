var mongoose = require('mongoose')
var Schema = mongoose.Schema

var folderSchema = new Schema({
	title: {
		type: String,
		maxlength = [255, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
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
