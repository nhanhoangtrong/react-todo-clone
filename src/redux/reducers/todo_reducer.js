import { ADD_TODO, REMOVE_TODO, MARK_TODO } from '../action_types/todo_action_types'
import { REMOVE_DAY } from '../action_types/day_action_types'

module.exports = function(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			var new_id = state.length == 0 ? 1 : state[state.length - 1].id + 1
			return [
				...state,
				{
					id: new_id,
					text: action.text,
					day_id: action.day_id,
					completed: false
				}
			]
		case REMOVE_TODO:
			return state.reduce(function(new_state, todo) {
				if (todo.id !== action.id) {
					new_state.push(todo)
				}
				return new_state
			}, [])
		case MARK_TODO:
			return Object.assign([], state.map(function(todo) {
				if (todo.id === action.id) {
					todo.completed = !todo.completed
				}
				return todo
			}))
		case REMOVE_DAY:
			return state.reduce(function(new_state, todo) {
				// Remove all todos in this day
				if (todo.day_id !== action.id) {
					new_state.push(todo)
				}
				return new_state
			})
		default:
			return state
	}
}