module.exports = {
	addTodoActionCreator: function(text) {
		return {
			type: 'ADD',
			text: text
		}
	},
	removeTodoActionCreator: function(id) {
		return {
			type: 'REMOVE',
			id: id
		}
	},
	markTodoActionCreator: function(id) {
		return {
			type: 'MARK_COMPLETED',
			id: id
		}
	},
	filterAllActionCreator: function() {
		return {
			type: 'FILTER_ALL'
		}
	},
	filterCompletedActionCreator: function() {
		return {
			type: 'FILTER_COMPLETED'
		}
	},
	filterIncompletedActionCreator: function() {
		return {
			type: 'FILTER_INCOMPLETED'
		}
	}
 }