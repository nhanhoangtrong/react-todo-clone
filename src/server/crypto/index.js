var crypto = require('crypto')

module.exports = {
    encrypt: function(text) {

    },
    decrypt: function(encrypted) {

    },
    hmac: function(text) {
        const hash = crypto.createHmac('sha256', 'server secrect')
        hash.update(text)
        return hash.digest('hex')
    }
}
