import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todo_reducer'
import filterReducer from './reducers/filter_reducer'
import dayReducer from './reducers/day_reducer'

var todos = [
  {
    id: 1,
    text: "Clean house",
    completed: false,
    visible: true
  },
  {
    id: 2,
    text: "Cook",
    completed: true,
    visible: true
  },
  {
    id: 3,
    text: "Fix computer",
    completed: false,
    visible: true
  }
]

export default createStore(combineReducers({
	filter: filterReducer,
	todos: todoReducer,
  days: dayReducer
}))