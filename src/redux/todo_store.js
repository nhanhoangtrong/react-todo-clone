import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todo_reducer'
import filterReducer from './reducers/filter_reducer'
import listReducer from './reducers/list_reducer'
import searchReducer from './reducers/search_reducer'

export default createStore(combineReducers({
	filter: filterReducer,
	todos: todoReducer,
  	lists: listReducer,
  	search: searchReducer
}))
