import {
	CREATE_DAY,
	REMOVE_DAY,
	EDIT_DAY,
	ADD_TODO_DAY,
	REMOVE_TODO_DAY,
	MARK_TODO_DAY
} from '../action_types/day_action_types'

module.exports = {
	createDay: (date) => {
		return {
			type: CREATE_DAY,
			date: date
		}
	},
	removeDay: (id) => {
		return {
			type: REMOVE_DAY,
			date: date
		}
	},
	editDay: (id, date) => {
		return {
			type: EDIT_DAY,
			id: id,
			date: date
		}
	}
}