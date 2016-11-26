import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import todoStore from './redux/todo_store'

import App from './components/App'
import TodoApp from './components/apps/TodoApp'
import UserApp from './components/apps/UserApp'

require('./index.html')
var render = function() {
	return (
		<Provider store={todoStore}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<Route path="/todo" component={TodoApp}>
						<Route path="/todo/:filter" component={TodoApp} />
					</Route>
					<Route path="/user" component={UserApp}/>
				</Route>
			</Router>
		</Provider>
	)
}

ReactDOM.render(render(), document.getElementById('app'))
