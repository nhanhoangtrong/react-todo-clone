import React from 'react'
import style from '../style/style.styl'
import FilterableToDoDay from './FilterableToDoDay'

export default React.createClass({
	handleAdd: function(e) {
		e.preventDefault()
		var date = new Date().getDate()
		this.props.onCreateDay(date)
	},
	render: function() {
		return (
			<div className={style.todoDayList}>
				{this.props.days.map( day => {
					return (
						<FilterableToDoDay day={day} key={day.id} />
					)
				})}
				<div className={style.todoDayListBottom}>
					<a href="#" className={style.button} onClick={this.handleAdd}>Add</a>
				</div>
			</div>
		)
	}
})