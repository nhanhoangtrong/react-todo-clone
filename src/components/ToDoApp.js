var React = require('react')
var style = require('../style/style.styl')
var ToDoDay = require('./ToDoDay')
var ToDoAppHeader = require('./ToDoAppHeader')

module.exports = React.createClass({
	render: function() {
		return (
			<div className={style.todoApp}>
				<ToDoAppHeader />
				<ToDoDay />
			</div>
		)
	}
})