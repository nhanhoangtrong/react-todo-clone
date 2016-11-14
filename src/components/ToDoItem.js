import React from 'react'
import style from '../style/style.styl'
import todoStore from '../redux/todo_store'

export default React.createClass({
  render: function() {
    var textClass = this.props.todoCompleted ? style.todoCompleted : style.todoIncompleted
    var buttonCheckClass = this.props.todoCompleted ? style.buttonUncheck : style.buttonCheck
    return (
      <li>
        <div className={style.todoItem}>
          <div className={style.todoButtons}>
              <a href="#" className={style.button} onClick={this.props.onClickMarkTodo}><span className={buttonCheckClass}/></a>

            <a href="#" className={style.button} onClick={this.props.onClickRemoveTodo}><span className={style.buttonRemove}/></a>
          </div>
          <p className={textClass}>{this.props.todoText}</p>
        </div>
      </li>
    )
  }
})
