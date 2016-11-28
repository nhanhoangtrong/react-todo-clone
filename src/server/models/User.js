var mongoose = require('mongoose')

// Create user schema
var userSchema = new mongoose.Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	is_admin: { type: Boolean, default: false },
	meta: {
		age: Number,
		website: String
	},
	created: Date,
	updated: Date
})


// On pre-save, add created and updated value
userSchema.pre('save', function(next) {
  // Get the current day
  var currentDay = new Date()

  // Change the updated field to current day
  this.updated = currentDay

  // Check if created exists or not
  if (!this.created) {
    this.created = currentDay
  }
  next()
})


// Create model from schema
var User = mongoose.model('User', userSchema)

module.exports = User
