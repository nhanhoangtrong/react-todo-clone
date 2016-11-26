import React from 'react'
import style from '../../style/style.styl'

export default  React.createClass({
  getInitialState: function() {
    return {text: ''}
  },
  handleAddTodoSubmit: function(e) {
    if (this.refs.todoText.value !== "") {
      this.props.onClickAddTodo(this.refs.todoText.value)
    }
    this.refs.todoText.value = "" // set value to null
    e.preventDefault() // Stop default handle
  },
  render: function() {
    return (
      <form className={style.todoForm} onSubmit={this.handleAddTodoSubmit}>
        <input ref="todoText" type="text"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
})
