import React from 'react'
import todoStore from '../redux/todo_store'
import ToDoDay from './ToDoDay'
import { filterCompletedActionCreator, filterIncompletedActionCreator, filterAllActionCreator } from '../redux/action_creators/filter_action_creators'


console.log(JSON.stringify(todoStore.getState()))
export default React.createClass({
	getInitialState: function() {
    	// We subscribe the update function of ToDo element so
    	// it will update when needed
    	this.filterToDos(this.props.filter)
    	this.unsubscribe = todoStore.subscribe(this.update)
		return {todos: todoStore.getState().todos}
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
		console.log(JSON.stringify(todoStore.getState().todos))
		todoStore.getState().todos.map(function(todo) {
			console.log(todo.visible, todo.text)
		})

		this.setState({todos: todoStore.getState().todos})
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