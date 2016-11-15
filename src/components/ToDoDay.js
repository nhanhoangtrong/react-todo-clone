import React from 'react'
import style from '../style/style.styl'
import AddableToDoForm from './AddableToDoForm'
import ToDoList from './ToDoList'
import EditableToDoDayHeader from './EditableToDoDayHeader'

import { addTodoActionCreator, markTodoActionCreator } from '../redux/action_creators/todo_action_creators'

var ToDoDay = React.createClass({
  render: function() {
    return (
      <div className={style.todoDay}>
        <EditableToDoDayHeader day={this.props.day} date={this.props.day.date}/>
        <ToDoList todos={this.props.todos}/>
        <AddableToDoForm dayId={this.props.day.id}/>
      </div>
    )
  }
})

export default ToDoDay
