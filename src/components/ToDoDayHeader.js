var React = require('react')
var style = require('../style/style.styl')

module.exports = React.createClass({
	render: function() {
		return (
	        <div className={style.todoDayHeader}>
	        	<h2>Date {this.props.date}</h2>
	        </div>
        )
	}
})