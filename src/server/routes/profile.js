var express = require('express')
var router = express.Router()

router.get('/:username', function(req, res, next) {
	res.send('User ' + req.params.username + ' profile')
})

module.exports = router