import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
	filterCompletedActionCreator,
	filterIncompletedActionCreator,
	filterAllActionCreator
} from '../../redux/action_creators/filter_action_creators'
import { todoMarkActionCreator } from '../../redux/action_creators/todo_action_creators'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETED } from '../../redux/action_types/filter_action_types'
import { SEARCH_TODO, SEARCH_NONE } from '../../redux/action_types/search_action_types'


const getFilteredTodos = (todos, filter, search, _list) => {
	if (search.type === SEARCH_TODO) {
		switch (filter) {
			case FILTER_COMPLETED:
				return todos.filter(todo => todo.completed
				                    && todo._list === _list
				                    && todo.text.indexOf(search.query) !== -1)
			case FILTER_INCOMPLETED:
				return todos.filter(todo => !todo.completed
				                    && todo._list === _list
				                    && todo.text.indexOf(search.query) !== -1)
			default:
				return todos.filter(todo => todo._list === _list
				                    && todo.text.indexOf(search.query) !== -1)
		}

	} else {
		switch (filter) {
			case FILTER_COMPLETED:
				return todos.filter(todo => todo.completed && todo._list === _list)
			case FILTER_INCOMPLETED:
				return todos.filter(todo => !todo.completed && todo._list === _list)
			default:
				return todos.filter(todo => todo._list === _list)
		}
	}

}

const mapStateToProps = (state, ownProps) => {
	return  {
		todos: getFilteredTodos(state.todos, state.filter, state.search, ownProps.list.id)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onTodoClick: (id) => {
			dispatch(todoMarkActionCreator(id))
		}
	}
}

const FilterableList = connect(
	mapStateToProps,
	mapDispatchToProps
)(List)

export default FilterableList
