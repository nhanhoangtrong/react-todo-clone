import React from 'react'
import style from '../../style/style.styl'
import FilterLink from '../links/FilterLink'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETED } from '../../redux/action_types/filter_action_types'
import SearchableForm from '../forms/SearchableForm'

export default React.createClass({
	render: function() {
		return (
		        <div className={style.appHeader}>
		        	<h1>Todo Application</h1>
		        	<p>A small Todo Application for everyone</p>
		        	<FilterLink to="/todo/all" filter={FILTER_ALL}>All</FilterLink>
	        		<FilterLink to="/todo/completed" filter={FILTER_COMPLETED} >Completed</FilterLink>
	        		<FilterLink to="/todo/incompleted" filter={FILTER_INCOMPLETED}>Incompleted</FilterLink>
	        		<SearchableForm />
		        </div>
		        )
	}
})
