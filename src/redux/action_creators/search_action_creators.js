import { SEARCH_TODO, SEARCH_NONE, SEARCH_TAG } from '../action_types/search_action_types'

module.exports = {
	searchTodoActionCreator: (query) => {
		return {
			type: SEARCH_TODO,
			query: query
		}
	},
	searchNoneActionCreator: () => {
		return {
			type: SEARCH_NONE
		}
	},
	searchTagActionCreator: (tag) => {
		return {
			type: SEARCH_TAG,
			tag: tag
		}
	}
}