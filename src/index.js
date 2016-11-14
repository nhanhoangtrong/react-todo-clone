import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import todoStore from './redux/todo_store'

import App from './components/App'
import ToDoApp from './components/ToDoApp'

require('./index.html')

var render = function() {
	return (
		<Provider store={todoStore}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<Route path="/todo" component={ToDoApp}>
						<Route path="/todo/:filter" component={ToDoApp} />
					</Route>
				</Route>
			</Router>
		</Provider>
	)
}

ReactDOM.render(render(), document.getElementById('app'))
