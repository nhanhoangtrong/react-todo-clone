import React from 'react'
import style from '../style/style.styl'
import ToDoDay from './ToDoDay'
import ToDoAppHeader from './ToDoAppHeader'

export default React.createClass({
	render: function() {
		return (
			<div className={style.todoApp}>
				<ToDoAppHeader />
				<ToDoDay />
			</div>
		)
	}
})