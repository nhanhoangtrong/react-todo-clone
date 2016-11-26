import { ADD_TODO, EDIT_TODO, REMOVE_TODO, MARK_TODO } from '../action_types/todo_action_types'

module.exports = {
	addTodoActionCreator: function(text, _list) {
		return {
			type: ADD_TODO,
			_list: _list,
			text: text
		}
	},
	editTodoActionCreator: function(id, text) {
		return {
			type: EDIT_TODO,
			id: id,
			text: text
		}
	},
	removeTodoActionCreator: function(id) {
		return {
			type: REMOVE_TODO,
			id: id
		}
	},
	markTodoActionCreator: function(id) {
		return {
			type: MARK_TODO,
			id: id
		}
	}
 }
