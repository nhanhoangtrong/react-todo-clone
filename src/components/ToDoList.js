import React from 'react'
import style from '../style/style.styl'
import ToDoItem from './ToDoItem.js'

export default  React.createClass({
  render: function() {
    return (
      <ul className={style.todoList}>
        {this.props.todos.map((todo)=> {
          if (todo.visible)
          return (
            <ToDoItem todoText={todo.text} todoCompleted={todo.completed} todoId={todo.id} key={todo.id}/>
          )
        })}
      </ul>
    )
  }
})
