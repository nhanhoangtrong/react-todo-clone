var React = require('react')
var todoStore = require('../redux-data/todo_store.js')
var { addTodoActionCreator } = require('../redux-data/todo_action_creators.js')

module.exports =  React.createClass({
  getInitialState: function() {
    return {text: ''}
  },
  handleToDoSubmit: function(e) {
    todoStore.dispatch(addTodoActionCreator(this.refs.todoText.value))
    this.refs.todoText.value = "" // set value to null
    e.preventDefault() // Stop default handle
  },
  render: function() {
    return (
      <form onSubmit={this.handleToDoSubmit}>
        <input ref="todoText" type="text"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
})
