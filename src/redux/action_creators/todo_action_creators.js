import { ADD_TODO, REMOVE_TODO, MARK_TODO } from '../action_types/todo_action_types'

module.exports = {
	addTodoActionCreator: function(text, day_id) {
		return {
			type: ADD_TODO,
			day_id: day_id,
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