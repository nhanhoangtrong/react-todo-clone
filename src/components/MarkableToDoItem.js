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

// const mergeProps = (stateProps, dispatchProps, ownProps) {
// 	return {
// 		...stateProps,
// 		...dispatchProps,
// 		todoText: ownProps.todoText,
// 		todoId: ownProps.todoId,
// 		todoCompleted: ownProps.todoCompleted
// 	}
// }

const MarkableToDoItem = connect(
	null,
	mapDispatchToProps
)(ToDoItem)

export default MarkableToDoItem