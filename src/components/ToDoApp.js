import React from 'react'
import style from '../style/style.styl'
import ToDoDayFilterable from './ToDoDayFilterable'
import ToDoAppHeader from './ToDoAppHeader'

export default React.createClass({
	render: function() {
		return (
			<div className={style.todoApp}>
				<ToDoAppHeader />
				<ToDoDayFilterable filter={this.props.params.filter} dayId={1} />
			</div>
		)
	}
})