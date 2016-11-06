import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App.js'
require('./index.html')

var render = function() {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/:filter" component={App} />
		</Router>
	)
}

ReactDOM.render(render(), document.getElementById('app'))
