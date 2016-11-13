import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETED } from '../action_types/filter_action_types'

module.exports = {
	filterAllActionCreator: function() {
		return {
			type: FILTER_ALL
		}
	},
	filterCompletedActionCreator: function() {
		return {
			type: FILTER_COMPLETED
		}
	},
	filterIncompletedActionCreator: function() {
		return {
			type: FILTER_INCOMPLETED
		}
	}
}