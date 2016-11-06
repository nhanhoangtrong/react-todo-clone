import React from 'react'
import style from '../style/style.styl'
import { Link } from 'react-router'

export default React.createClass({
	render: function() {
		return (
	        <div className={style.todoDayHeader}>
	        	<h2>Date {this.props.date}</h2>
	        	<Link to="/all" activeClassName={style.linkActive}>All</Link>
	        	<Link to="/completed" activeClassName={style.linkActive}>Completed</Link>
	        	<Link to="/incompleted" activeClassName={style.linkActive}>Incompleted</Link>
	        </div>
        )
	}
})