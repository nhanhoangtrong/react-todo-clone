import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { appHistory } from './global'
import { Provider } from 'react-redux'
import store from './client/store'

import App from './client/components/App'

require('./index.html')

var render = function() {
	return (
		<Provider store={store}>
			<Router history={appHistory}>
				<Route path="/" component={App}>
				</Route>
			</Router>
		</Provider>
	)
}

ReactDOM.render(render(), document.getElementById('app'))
