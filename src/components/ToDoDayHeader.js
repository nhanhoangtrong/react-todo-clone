import React from 'react'
import style from '../style/style.styl'
import { Link } from 'react-router'

export default React.createClass({
	render: function() {
		return (
	        <div className={style.todoDayHeader}>
	        	<h2>Date {this.props.date}</h2>
	        	<Link to="/todo/all" activeClassName={style.active}>All</Link>
	        	<Link to="/todo/completed" activeClassName={style.active}>Completed</Link>
	        	<Link to="/todo/incompleted" activeClassName={style.active}>Incompleted</Link>
	        </div>
        )
	}
})