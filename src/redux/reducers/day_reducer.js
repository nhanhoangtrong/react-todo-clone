import {
	CREATE_DAY,
	REMOVE_DAY,
	EDIT_DAY,
	ADD_TODO_DAY,
	REMOVE_TODO_DAY,
	MARK_TODO_DAY
} from '../action_types/day_action_types'

export default function(days = [], action) {
	switch (action.type) {
		case CREATE_DAY:
			var day_id = (days.length === 0 ? 0 : days[days.length-1].id) + 1;
			return [
				...days,
				{
					date: action.date,
					id: day_id
				}
			]
		case REMOVE_DAY:
			return days.filter( (day) => {
				return day.id !== action.id
			})
		case EDIT_DAY:
			return days.map( (day) => {
				if (day.id === action.id) {
					day.date = action.date
				}
				return day
			})
		default:
			return days
	}
}