import { SEARCH_NONE, SEARCH_TODO, SEARCH_TAG } from '../action_types/search_action_types'

export default ( search = {}, action ) => {
	switch (action.type) {
		case SEARCH_TODO:
			return {
				type: SEARCH_TODO,
				query: action.query
			}
		case SEARCH_TAG:
			return {
				type: SEARCH_TAG,
				tag: action.tag
			}
		case SEARCH_NONE:
			return {
				type: SEARCH_NONE,
				query: "",
				tag: ""
			}
		default:
			return search
	}
}