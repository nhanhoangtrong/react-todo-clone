import React from 'react'
import Todo from './Todo'
import {
	connect
} from 'react-redux'
import {
	editTodoActionCreator,
	markTodoActionCreator,
	removeTodoActionCreator
} from '../../redux/action_creators/todo_action_creators'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickMarkTodo: (e) => {
			e.preventDefault()
			dispatch(markTodoActionCreator(ownProps.todoId))
		},
		onClickRemoveTodo: (e) => {
			e.preventDefault()
			dispatch(removeTodoActionCreator(ownProps.todoId))
		},
		onSubmitEditTodo: (text) => {
			dispatch(editTodoActionCreator(ownProps.todoId, text))
		}
	}
}

const EditableTodo = connect(
	null,
	mapDispatchToProps
)(Todo)

export default EditableTodo
