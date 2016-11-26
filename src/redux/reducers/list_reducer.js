import {
	CREATE_LIST,
	REMOVE_LIST,
	EDIT_LIST
} from '../action_types/list_action_types'

export default function(lists = [], action) {
	switch (action.type) {
		case CREATE_LIST:
			var list_id = (lists.length === 0 ? 0 : lists[lists.length-1].id) + 1;
			return [
				...lists,
				{
					title: action.title,
					id: list_id
				}
			]
		case REMOVE_LIST:
			return lists.filter( (list) => {
				return list.id !== action.id
			})
		case EDIT_LIST:
			return lists.map( (list) => {
				if (list.id === action.id) {
					list.title = action.title
				}
				return list
			})
		default:
			return lists
	}
}
