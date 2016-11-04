var React = require('react')
var todoStore = require('../redux-data/todo_store.js')
var { markTodoActionCreator, removeTodoActionCreator } = require('../redux-data/todo_action_creators.js')

module.exports =  React.createClass({
  getInitialState: function() {
    return {completed: this.props.todoCompleted}
  },
  handleCheckComplete: function(e) {
    todoStore.dispatch(markTodoActionCreator(this.props.todoId))
  },
  handleRemoveClick: function(e) {
    todoStore.dispatch(removeTodoActionCreator(this.props.todoId))
    e.preventDefault()
  },
  render: function() {
    var text = this.props.todoCompleted ? (<s>{this.props.todoText}</s>) : this.props.todoText
    return (
      <li>
        <p>
          <input type="checkbox" checked={this.props.todoCompleted} onChange={this.handleCheckComplete}/>
          <input type="button" value="remove" onClick={this.handleRemoveClick}/>
          &nbsp;&nbsp;{text}
        </p>
      </li>
    )
  }
})
