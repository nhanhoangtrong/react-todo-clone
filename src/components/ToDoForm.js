import React from 'react'
import style from '../style/style.styl'
import todoStore from '../redux/todo_store.js'
import { addTodoActionCreator } from '../redux/action_creators/todo_action_creators.js'

export default  React.createClass({
  getInitialState: function() {
    return {text: ''}
  },
  handleToDoSubmit: function(e) {
    if (this.refs.todoText.value === "") {
      alert("Text mustn't me null")
      return
    }
    todoStore.dispatch(addTodoActionCreator(this.refs.todoText.value))
    this.refs.todoText.value = "" // set value to null
    e.preventDefault() // Stop default handle
  },
  render: function() {
    return (
      <form className={style.todoForm} onSubmit={this.handleToDoSubmit}>
        <input ref="todoText" type="text"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
})
