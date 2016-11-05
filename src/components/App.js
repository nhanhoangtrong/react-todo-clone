var React = require('react')
var ToDoApp = require('./ToDoApp.js')

module.exports =  React.createClass({
  render: function() {
    return (
      <div>
        <ToDoApp />
      </div>
    )
  }
})
