import React from 'react'
import style from '../../style/style.styl'
import SubmitableTodoForm from '../forms/SubmitableTodoForm'
import TodoList from '../todo/TodoList'
import EditableListHeader from './EditableListHeader'

import { addTodoActionCreator, markTodoActionCreator } from '../../redux/action_creators/todo_action_creators'

var List = React.createClass({
  render: function() {
    return (
      <div className={style.listWrapper}>
        <EditableListHeader list={this.props.list} title={this.props.list.title}/>
        <TodoList todos={this.props.todos}/>
        <SubmitableTodoForm _list={this.props.list.id}/>
      </div>
    )
  }
})

export default List
