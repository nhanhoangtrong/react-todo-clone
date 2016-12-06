import { createStore, combineReducers } from 'redux'
import todosReducer from './reducers/todosReducer'
import listsReducer from './reducers/listsReducer'
import foldersReducer from './reducers/foldersReducer'
import userReducer from './reducers/userReducer'

export default createStore(combineReducers({
	todos: todosReducer,
	lists: listsReducer,
	folders: foldersReducer,
	user: userReducer
}))