import React from 'react'
import ToDoItem from './ToDoItem'
import { connect } from 'react-redux'
import { markTodoActionCreator, removeTodoActionCreator } from '../redux/action_creators/todo_action_creators'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickMarkTodo: (e) => {
			e.preventDefault()
			dispatch(markTodoActionCreator(ownProps.todoId))
		},
		onClickRemoveTodo: (e) => {
			e.preventDefault()
			dispatch(removeTodoActionCreator(ownProps.todoId))
		}
	}
}

const EditableToDoItem = connect(
	null,
	mapDispatchToProps
)(ToDoItem)

export default EditableToDoItem