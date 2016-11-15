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
			<div style={style.todoDayList}>
				{this.props.days.map( day => {
					return (
						<FilterableToDoDay day={day} key={day.id} />
					)
				})}
				<div>
					<a href="#" className={style.todoDayAdd} onClick={this.handleAdd}>Add</a>
				</div>
			</div>
		)
	}
})