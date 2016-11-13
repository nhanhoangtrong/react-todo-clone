import React from 'react'
import style from '../style/style.styl'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoDayHeader from './ToDoDayHeader'

import { addTodoActionCreator, markTodoActionCreator } from '../redux/action_creators/todo_action_creators'

var ToDoDay = React.createClass({
  render: function() {
    return (
      <div className={style.todoDay}>
        <ToDoDayHeader date="25-02-1994"/>
        <ToDoList todos={this.props.todos}/>
        <ToDoForm/>
      </div>
    )
  }
})

export default ToDoDay
