import { createStore } from 'redux'

var reducer = function(state = [], action) {
	switch (action.type) {
		case 'ADD':
			if (action.text === "") {
				return state
			}
			var new_id = state.length == 0 ? 1 : state[state.length - 1].id + 1
			return [
			...state,
			{
				id: new_id,
				text: action.text,
				completed: false
			}
			]
		case 'REMOVE':
			var new_state = []
			for (var i in state) {
				var todo = state[i]
				if (todo.id != action.id) {
					new_state.push(todo)
				}
			}
			return new_state
		case 'MARK_COMPLETED':
			var new_state = []
			for (var i in state) {
				var todo = state[i]
				if (todo.id == action.id) {
					todo.completed = !todo.completed
				}
				new_state.push(todo)
			}
			return new_state
		default:
			return state
	}
}

module.exports = createStore(reducer)