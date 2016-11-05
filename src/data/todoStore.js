import { createStore, combineReducers } from 'redux'
import todoReducer from './todoReducer'

module.exports = createStore(combineReducers({ todos: todoReducer }))