var mongoose = require('mongoose')
var Schema = mongoose.Schema

var listSchema = new Schema({
	title: {
		type: String,
		maxlength = [255, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).'],
		required: true
	},
	order: Number,
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	_folder: {
		type: Schema.Types.ObjectId,
		ref: 'Folder'
	}
})

module.exports = mongoose.model('List', listSchema)
