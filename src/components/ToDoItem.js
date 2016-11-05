var React = require('react')
var todoStore = require('../redux-data/todo_store.js')
var { markTodoActionCreator, removeTodoActionCreator } = require('../redux-data/todo_action_creators.js')
var style = require('../style/style.styl')

module.exports =  React.createClass({
  getInitialState: function() {
    return {completed: this.props.todoCompleted}
  },
  handleCheckComplete: function(e) {
    todoStore.dispatch(markTodoActionCreator(this.props.todoId))
  },
  handleRemoveClick: function(e) {
    todoStore.dispatch(removeTodoActionCreator(this.props.todoId))
    e.preventDefault()
  },
  render: function() {
    var textClass = this.props.todoCompleted ? style.todoCompleted : style.todoIncompleted
    var buttonCheckClass = this.props.todoCompleted ? style.buttonUncheck : style.buttonCheck
    return (
      <li>
        <div className={style.todoItem}>
          <div className={style.todoButtons}>
              <a href="#" className={style.button} onClick={this.handleCheckComplete}><span className={buttonCheckClass}/></a>

            <a href="#" className={style.button} onClick={this.handleRemoveClick}><span className={style.buttonRemove}/></a>
          </div>
          <p className={textClass}>{this.props.todoText}</p>
        </div>
      </li>
    )
  }
})
