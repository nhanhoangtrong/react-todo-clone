import React from 'react'
import style from '../style/style.styl'

export default React.createClass({
	render: function() {
		return (
	        <div className={style.todoDayHeader}>
	        	<h2>Date {this.props.date}</h2>
	        </div>
        )
	}
})