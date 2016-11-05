module.exports = function(state=[], action) {
	switch(action.type) {
		case 'ADD_TODO':
			var id
			if (state.length == 0) {
				id = 1
			} else {
				id = state[state.length - 1].id + 1
			}
			return [
			...state,
			{
				id: id,
				text: action.text,
				completed: false
			}]
		case 'MARK_COMPLETED':
			var new_state = []
			for (var i in state) {
				var todo = state[i]
				if (todo.id == action.id) {
					todo.completed = true
				}
				new_state.push(todo)
			}
			console.log("last state", state, "new state", new_state)
			return new_state
		default:
			return state
	}
}