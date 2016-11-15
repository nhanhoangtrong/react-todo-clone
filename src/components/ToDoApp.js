import React from 'react'
import style from '../style/style.styl'
import AddableToDoDayList from './AddableToDoDayList'
import ToDoAppHeader from './ToDoAppHeader'

export default React.createClass({
	render: function() {
		return (
			<div className={style.todoApp}>
				<ToDoAppHeader />
				<AddableToDoDayList />
			</div>
		)
	}
})