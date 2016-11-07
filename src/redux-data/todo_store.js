import { createStore } from 'redux'

var todos = [
  {
    id: 1,
    text: "Clean house",
    completed: false,
    visible: true
  },
  {
    id: 2,
    text: "Cook",
    completed: true,
    visible: true
  },
  {
    id: 3,
    text: "Fix computer",
    completed: false,
    visible: true
  }
]

var reducer = function(state = todos, action) {
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
				completed: false,
				visible: true
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
			var new_state = Object.assign([], state.map(function(todo) {
				if (todo.id == action.id)
					todo.completed = !todo.completed
				return todo
			}))
			return new_state

		case 'FILTER_ALL':
			return [
			...state.map(function(todo) {
				todo.visible = true
				return todo
			})
			]

		case 'FILTER_COMPLETED':
			console.log('completed filter')
			return [
			...state.map(function(todo) {
				if (!todo.completed) {
					todo.visible = false
				} else {
					todo.visible = true
				}
				return todo
			})
			]
		case 'FILTER_INCOMPLETED':
			console.log('incompleted filter')
			return [
			...state.map(function(todo) {
				if (todo.completed) {
					todo.visible = false
				} else {
					todo.visible = true
				}
				return todo
			})
			]
		default:
			return state
	}
}

export default createStore(reducer)