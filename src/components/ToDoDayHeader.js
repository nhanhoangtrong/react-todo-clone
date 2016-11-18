import React from 'react'
import style from '../style/style.styl'
import store from '../redux/todo_store'

export default React.createClass({
	getInitialState: function() {
		return {
			date: this.props.date.getDate(),
			year: this.props.date.getFullYear(),
			month: this.props.date.getMonth(),
			dates: [...Array(this.getMaxDate(this.props.date.getMonth(),
			                                  this.props.date.getFullYear())).keys()]
		}
	},
	getMaxDate: function(month, year) {
		var isLeapYear = (year % 400 === 0) ||((year % 4 === 0) && (year % 100 !== 0))
		switch (month) {
			case 0:
			case 2:
			case 4:
			case 6:
			case 7:
			case 9:
			case 11:
				return 31
			case 3:
			case 5:
			case 8:
			case 10:
				return 30
			case 1:
				return isLeapYear ? 29 : 28
			default:
				return 30
		}
	},
	handleOnSelectDate: function(e) {
		try {
			var date = Number(e.target.value)
			var maxDate = this.getMaxDate(this.state.month, this.state.year)
			if (date > 0 && date <= maxDate) {
				this.setState({date: date})
				this.props.onEditDateSubmit(new Date(this.state.year, this.state.month, date))
			}
		} catch (err) {
		}

	},
	handleOnSelectMonth: function(e) {
		try {
			var month = Number(e.target.value)
			var maxDate = this.getMaxDate(month, this.state.year)
			var dates = [...Array(maxDate).keys()]
			if (month >= 0 && month < 12) {
				var date = this.state.date
				if (date > maxDate) {
					date = maxDate
				}
				this.setState({month: month, date: date, dates: dates})
				this.props.onEditDateSubmit(new Date(this.state.year, month, date))
			}
		} catch (err) {

		}
	},
	handleOnSelectYear: function(e) {
		try {
			var year = Number(e.target.value)
			var maxDate = this.getMaxDate(this.state.month, year)
			var date = this.state.date
			var dates = [...Array(maxDate).keys()]
			if (date > maxDate) {
				date = maxDate
			}
			this.setState({year: year, date: date, dates: dates})
			this.props.onEditDateSubmit(new Date(year, this.state.month, date))
		} catch (err) {

		}

	},
	handleOnRemove: function(e) {
		e.preventDefault()
		this.props.onClickRemove()
	},
	render: function() {
		console.log(store.getState())
		return (
	        <div className={style.todoDayHeader}>
	        	<select name="date" onChange={this.handleOnSelectDate} value={this.state.date}>
	        		{this.state.dates.map( (date) => {
	        			return (<option value={date + 1} key={date}>{date + 1}</option>)
	        		})}
	        	</select>
	        	<select name="month" onChange={this.handleOnSelectMonth} value={this.state.month}>
	        		{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map( (month) => {
	        			return (<option value={month} key={month}>{month + 1}</option>)
	        		})}
	        	</select>
	        	<select name="year" onChange={this.handleOnSelectYear} value={this.state.year}>
	        		<option value={2015}>2015</option>
	        		<option value={2016}>2016</option>
	        		<option value={2017}>2017</option>
	        		<option value={2018}>2018</option>
	        	</select>
	        	<a href="#" className={style.iconButton} onClick={this.handleOnRemove}><span className={style.iconButtonRemove}/></a>
	        </div>
        )
	}
})