import React from 'react'
import style from '../../style/style.styl'
import EditableTodo from './EditableTodo.js'

export default React.createClass({
  render: function() {
    return (
      <ul className={style.list}>
        {this.props.todos.map( (todo) => {
          return (
            <EditableTodo todoText={todo.text} todoCompleted={todo.completed} todoId={todo.id} key={todo.id}/>
          )
        })}
      </ul>
    )
  }
})
