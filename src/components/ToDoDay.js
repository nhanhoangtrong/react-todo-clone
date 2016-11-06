import React from 'react'
import style from '../style/style.styl'
import ToDoForm from './ToDoForm.js'
import ToDoList from './ToDoList.js'
import ToDoDayHeader from './ToDoDayHeader.js'
import todoStore from '../redux-data/todo_store.js'
import { addTodoActionCreator, markTodoActionCreator } from '../redux-data/todo_action_creators.js'

var todos = [
  {
    id: 1,
    text: "Clean house",
    completed: false
  },
  {
    id: 2,
    text: "Cook",
    completed: true
  },
  {
    id: 3,
    text: "Fix computer",
    completed: false
  }
]

for (var i in todos) {
  todoStore.dispatch(addTodoActionCreator(todos[i].text))
}

var ToDoDay = React.createClass({
  getInitialState: function() {
    // We subscribe the update function of ToDo element so
    // it will update when needed
    todoStore.subscribe(this.update)
    return {todos: todoStore.getState()}
  },
  update: function() {
    this.setState({todos: todoStore.getState()})
  },
  render: function() {
    return (
      <div className={style.todoDay}>
        <ToDoDayHeader date="25-02-1994"/>
        <ToDoList todos={this.state.todos}/>
        <ToDoForm/>
      </div>
    )
  }
})

export default ToDoDay
