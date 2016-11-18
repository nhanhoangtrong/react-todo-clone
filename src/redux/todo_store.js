import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todo_reducer'
import filterReducer from './reducers/filter_reducer'
import dayReducer from './reducers/day_reducer'
import searchReducer from './reducers/search_reducer'

export default createStore(combineReducers({
	filter: filterReducer,
	todos: todoReducer,
  	days: dayReducer,
  	search: searchReducer
}))