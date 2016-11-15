import React from 'react'
import style from '../style/style.styl'

export default React.createClass({
	getInitialState: function() {
		return {date: this.props.date}
	},
	handleKeyboardUp: function(e) {
		if (e.key === 'Enter') {
			var new_date = e.target.value
			if (new_date !== "" && new_date !== this.props.day.date) {
				console.log("entered new_date " + new_date)
				this.props.onEditSubmit(this.props.day.id, new_date)
			} else {
				e.target.value = this.props.day.date
			}
			e.target.blur()
		}
	},
	handleOnChange: function(e) {
		this.setState({date: e.target.value})
	},
	render: function() {
		return (
	        <div className={style.todoDayHeader}>
	        	<input type="text" className={style.todoDayHeaderDate} value={this.state.date}
	        		onKeyUp={this.handleKeyboardUp} onChange={this.handleOnChange}/>
	        </div>
        )
	}
})