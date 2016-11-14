import {
	CREATE_DAY,
	REMOVE_DAY,
	EDIT_DAY,
	ADD_TODO_DAY,
	REMOVE_TODO_DAY,
	MARK_TODO_DAY
} from '../action_types/day_action_types'

export default function(state = [], action) {
	switch (action.type) {
		case CREATE_DAY:
			return [
				...state,
				{
					date: action.date,
					id: action.id
				}
			]
		case REMOVE_DAY:
			return state.filter( (day) => {
				return day.id !=== action.id
			})
		case EDIT_DAY:
			return state.map( (day) => {
				if (day.id === action.id) {
					day.date = action.date
				}
				return day
			})
	}
}