var React = require('react')
var style = require('../style/style.styl')

module.exports = React.createClass({
	render: function() {
		return (
		        <div className={style.todoAppHeader}>
		        	<h1>ToDo Application</h1>
		        	<p>A small ToDo Application for everyone</p>
		        </div>
		        )
	}
})