import React from 'react'
import style from '../style/style.styl'

export default  React.createClass({
  getInitialState: function() {
    return {text: ''}
  },
  handleAddToDoSubmit: function(e) {
    if (this.refs.todoText.value !== "") {
      this.props.onClickAddToDo(this.refs.todoText.value)
    }
    this.refs.todoText.value = "" // set value to null
    e.preventDefault() // Stop default handle
    console.log("Add preventDefault!")
  },
  render: function() {
    return (
      <form className={style.todoForm} onSubmit={this.handleAddToDoSubmit}>
        <input ref="todoText" type="text"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
})
