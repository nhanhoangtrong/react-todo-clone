var React = require('react')
var ToDoItem = require('./ToDoItem.js')
var style = require('../style/style.styl')

module.exports =  React.createClass({
  render: function() {
    return (
      <ul className={style.todoList}>
        {this.props.todos.map((todo)=> {
          return (
            <ToDoItem todoText={todo.text} todoCompleted={todo.completed} todoId={todo.id} key={todo.id}/>
          )
        })}
      </ul>
    )
  }
})
