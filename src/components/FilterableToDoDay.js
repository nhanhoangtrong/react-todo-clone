import React from 'react'
import { connect } from 'react-redux'
import todoStore from '../redux/todo_store'
import ToDoDay from './ToDoDay'
import { filterCompletedActionCreator, filterIncompletedActionCreator, filterAllActionCreator } from '../redux/action_creators/filter_action_creators'
import { todoMarkActionCreator } from '../redux/action_creators/todo_action_creators'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETED } from '../redux/action_types/filter_action_types'


const getFilteredTodos = (todos, filter, day_id) => {
	switch (filter) {
		case FILTER_COMPLETED:
			return todos.filter(todo => todo.completed && todo.day_id === day_id)
		case FILTER_INCOMPLETED:
			return todos.filter(todo => !todo.completed && todo.day_id === day_id)
		default:
			return todos.filter(todo => todo.day_id === day_id)
	}
}

const mapStateToProps = (state, ownProps) => {
	return  {
		todos: getFilteredTodos(state.todos, state.filter, ownProps.day.id)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onTodoClick: (id) => {
			dispatch(todoMarkActionCreator(id))
		}
	}
}

const ToDoDayFilterable = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoDay)

export default ToDoDayFilterable