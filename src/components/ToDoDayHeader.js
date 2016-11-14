import React from 'react'
import style from '../style/style.styl'
import FilterLink from './FilterLink'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETED } from '../redux/action_types/filter_action_types'

export default React.createClass({
	render: function() {
		return (
	        <div className={style.todoDayHeader}>
	        	<h2>Date {this.props.date}</h2>
	        	<FilterLink to="/todo/all" filter={FILTER_ALL}>All</FilterLink>
	        	<FilterLink to="/todo/completed" filter={FILTER_COMPLETED} >Completed</FilterLink>
	        	<FilterLink to="/todo/incompleted" filter={FILTER_INCOMPLETED}>Incompleted</FilterLink>
	        </div>
        )
	}
})