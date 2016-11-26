import React from 'react'
import { connect } from 'react-redux'
import { addTodoActionCreator } from '../../redux/action_creators/todo_action_creators'
import TodoForm from './TodoForm'

const mapStateToProps = (state, ownProps) => {
	return {

	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickAddTodo: (text) => {
			dispatch(addTodoActionCreator(text, ownProps._list))
		}
	}
}

const SubmitableTodoForm = connect(
	null,
	mapDispatchToProps
)(TodoForm)

export default SubmitableTodoForm
