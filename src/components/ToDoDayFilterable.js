import React from 'react'
import todoStore from '../redux-data/todo_store'
import ToDoDay from './ToDoDay'
import { filterCompletedActionCreator, filterIncompletedActionCreator, filterAllActionCreator } from '../redux-data/todo_action_creators'

export default React.createClass({
	getInitialState: function() {
    	// We subscribe the update function of ToDo element so
    	// it will update when needed
    	this.filterToDos(this.props.filter)
    	this.unsubscribe = todoStore.subscribe(this.update)
		return {todos: todoStore.getState()}
	},
	componentWillMount() {
		console.log("Component Will Mount")
	},
	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should component update")
		this.filterToDos(nextProps.filter)
		return true
	},
	componentWillReceiveProps: function(nextProps) {
		this.filterToDos(nextProps.filter)
	},
	componentDiDUnmount: function() {
		this.unsubscribe()
	},
	update: function() {
		// console.log(this.state)
		todoStore.getState().map(function(todo) {
			console.log(todo.visible, todo.text)
		})

		this.setState({todos: todoStore.getState()})
	},
	filterToDos: function(filter) {
		switch (filter) {
			case "completed":
				todoStore.dispatch(filterCompletedActionCreator())
				return
			case "incompleted":
				todoStore.dispatch(filterIncompletedActionCreator())
				return
			default:
				todoStore.dispatch(filterAllActionCreator())
		}
	},
	render: function() {
		return (
		        <ToDoDay todos={this.state.todos} />
		        )
	}
})