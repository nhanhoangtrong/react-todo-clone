var React = require('react')
var ToDo = require('./ToDo.js')

module.exports =  React.createClass({
  render: function() {
    return (
      <div>
        <ToDo />
      </div>
    )
  }
})
