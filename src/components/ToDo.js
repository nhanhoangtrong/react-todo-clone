var React = require('react')
var ToDoForm = require('./ToDoForm.js')
var ToDoList = require('./ToDoList.js')

var store = require('../data/todoStore.js')
var addTodoActionCreator = require('../data/addTodoActionCreator.js')
var markTodoActionCreator = require('../data/markTodoActionCreator.js')

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
  }
]

store.dispatch(addTodoActionCreator("Clean house"))
console.log(store.getState())
store.dispatch(addTodoActionCreator("Wash clothes"))
console.log(store.getState())
store.dispatch(markTodoActionCreator(2))
console.log(store.getState())

module.exports = React.createClass({
  getInitialState: function() {
    return {todos: store.getState().todos}
  },
  handleToDoCreate: function(text) {
    var new_todos = this.state.todos
    var id= todos[todos.length - 1].id + 1
    new_todos.push({id: id, text: text, completed: false})
    this.setState({todos: new_todos})
  },
  handleItemComplete: function(todo) {
    var todos = this.state.todos
    todos.forEach(function(t) {
      if (t.id == todo.id) {
        console.log(t)
        t.completed = todo.completed
      }
    })
    this.setState({todos: todos})
  },
  render: function() {
    return (
      <div className="todo">
        <ToDoForm onToDoCreate={this.handleToDoCreate}/>
        <ToDoList todos={this.state.todos} onItemCheckComplete={this.handleItemComplete}/>
      </div>
    )
  }
})
