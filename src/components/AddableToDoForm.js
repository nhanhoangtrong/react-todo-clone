import React from 'react'
import { connect } from 'react-redux'
import { addTodoActionCreator } from '../redux/action_creators/todo_action_creators'
import AddToDoForm from './AddToDoForm'

const mapStateToProps = (state, ownProps) => {
	return {

	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClickAddToDo: (text) => {
			dispatch(addTodoActionCreator(text, ownProps.dayId))
		}
	}
}

const AddableToDoForm = connect(
	null,
	mapDispatchToProps
)(AddToDoForm)

export default AddableToDoForm