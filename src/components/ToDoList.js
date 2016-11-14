import React from 'react'
import style from '../style/style.styl'
import MarkableToDoItem from './MarkableToDoItem.js'

export default  React.createClass({
  render: function() {
    return (
      <ul className={style.todoList}>
        {this.props.todos.map( (todo) => {
          return (
            <MarkableToDoItem todoText={todo.text} todoCompleted={todo.completed} todoId={todo.id} key={todo.id}/>
          )
        })}
      </ul>
    )
  }
})
