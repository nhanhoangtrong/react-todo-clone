import React from 'react'
import style from '../style/style.styl'
import ToDoForm from './ToDoForm.js'
import ToDoList from './ToDoList.js'
import ToDoDayHeader from './ToDoDayHeader.js'

import { addTodoActionCreator, markTodoActionCreator } from '../redux-data/todo_action_creators.js'

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
