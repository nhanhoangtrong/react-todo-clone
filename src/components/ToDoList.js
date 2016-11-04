var React = require('react')
var ToDoItem = require('./ToDoItem.js')

module.exports =  React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo)=> {
          return (
            <ToDoItem todoText={todo.text} todoCompleted={todo.completed} todoId={todo.id} key={todo.id}/>
          )
        })}
      </ul>
    )
  }
})
