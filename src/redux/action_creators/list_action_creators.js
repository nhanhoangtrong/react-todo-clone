import {
	CREATE_LIST,
	REMOVE_LIST,
	EDIT_LIST,
	ADD_TODO_LIST,
	REMOVE_TODO_LIST,
	MARK_TODO_LIST
} from '../action_types/list_action_types'

module.exports = {
	createList: (title) => {
		return {
			type: CREATE_LIST,
			title: title
		}
	},
	removeList: (id) => {
		return {
			type: REMOVE_LIST,
			id: id
		}
	},
	editList: (id, title) => {
		return {
			type: EDIT_LIST,
			id: id,
			title: title
		}
	}
}
