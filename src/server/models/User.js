var mongoose = require('mongoose')
var crypto = require('../crypto')

// Create user schema
var userSchema = new mongoose.Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	first_name: String,
	last_name: String,
	auth_token: { type: String },
	email: { type: String, required: true, unique: true},
	is_admin: { type: Boolean, default: false },
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
  // If not, this is the first time user was created
  if (!this.created) {
    this.created = currentDay

	// Generate authentication token
	this.auth_token = crypto.hmac(this.password)
  }
  next()
})
userSchema.methods.isAdmin = function() {
	return this.is_admin
}

// Create model from schema
var User = mongoose.model('User', userSchema)

module.exports = User
