import React from 'react'
import style from '../style/style.styl'
import todoStore from '../redux/todo_store'

export default React.createClass({
	getInitialState: function() {
		return {todoText: this.props.todoText}
	},
	handleOnKeyUp: function(e) {
		if (e.key === 'Enter') {
			if (this.state.todoText !== "") {
				e.target.blur()
			}
		}
	},
	handleOnChange: function(e) {
		this.setState({todoText: e.target.value})
	},
	handleOnBlur: function(e) {
		if (this.state.todoText != "") {
			this.props.onSubmitEditTodo(this.state.todoText)
			console.log("todo updated " + this.props.todoId)
		} else {
			this.setState({todoText: this.props.todoText})
		}
	},
	render: function() {
		var textClass = this.props.todoCompleted ? style.todoCompleted : style.todoIncompleted
		var buttonCheckClass = this.props.todoCompleted ? style.iconButtonUncheck : style.iconButtonCheck
		return (
			<li>
				<div className={style.todoItem}>
					<div className={style.todoButtons}>
							<a href="#" className={style.iconButton} onClick={this.props.onClickMarkTodo}><span className={buttonCheckClass}/></a>

						<a href="#" className={style.iconButton} onClick={this.props.onClickRemoveTodo}><span className={style.iconButtonRemove}/></a>
					</div>
					<input type="text" className={textClass} value={this.state.todoText} onKeyUp={this.handleOnKeyUp} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
				</div>
			</li>
		)
	}
})
