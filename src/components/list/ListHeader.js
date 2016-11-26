import React from 'react'
import style from '../../style/style.styl'
import store from '../../redux/todo_store'

export default React.createClass({
	getInitialState: function() {
		return {
			title: this.props.title.getDate(),
			year: this.props.title.getFullYear(),
			month: this.props.title.getMonth(),
			titles: [...Array(this.getMaxTitle(this.props.title.getMonth(),
			                                  this.props.title.getFullYear())).keys()]
		}
	},
	getMaxTitle: function(month, year) {
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
	handleOnSelectTitle: function(e) {
		try {
			var title = Number(e.target.value)
			var maxTitle = this.getMaxTitle(this.state.month, this.state.year)
			if (title > 0 && title <= maxTitle) {
				this.setState({title: title})
				this.props.onEditTitleSubmit(new Title(this.state.year, this.state.month, title))
			}
		} catch (err) {
		}

	},
	handleOnSelectMonth: function(e) {
		try {
			var month = Number(e.target.value)
			var maxTitle = this.getMaxTitle(month, this.state.year)
			var titles = [...Array(maxTitle).keys()]
			if (month >= 0 && month < 12) {
				var title = this.state.title
				if (title > maxTitle) {
					title = maxTitle
				}
				this.setState({month: month, title: title, titles: titles})
				this.props.onEditTitleSubmit(new Title(this.state.year, month, title))
			}
		} catch (err) {

		}
	},
	handleOnSelectYear: function(e) {
		try {
			var year = Number(e.target.value)
			var maxTitle = this.getMaxTitle(this.state.month, year)
			var title = this.state.title
			var titles = [...Array(maxTitle).keys()]
			if (title > maxTitle) {
				title = maxTitle
			}
			this.setState({year: year, title: title, titles: titles})
			this.props.onEditTitleSubmit(new Title(year, this.state.month, title))
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
	        <div className={style.todoListHeader}>
	        	<select name="title" onChange={this.handleOnSelectTitle} value={this.state.title}>
	        		{this.state.titles.map( (title) => {
	        			return (<option value={title + 1} key={title}>{title + 1}</option>)
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
