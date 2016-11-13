import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETED } from '../action_types/filter_action_types'

module.exports = function(state = FILTER_ALL, action) {
	switch (action.type) {
		case FILTER_ALL:
			return FILTER_ALL
		case FILTER_COMPLETED:
			return FILTER_COMPLETED
		case FILTER_INCOMPLETED:
			return FILTER_INCOMPLETED
		default:
			return state
	}
}