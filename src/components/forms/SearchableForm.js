import { connect } from 'react-redux'
import React from 'react'
import { searchTodoActionCreator, searchNoneActionCreator } from '../../redux/action_creators/search_action_creators'
import style from '../../style/style.styl'

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		onSearch: function(query) {
			dispatch(searchTodoActionCreator(query))
		},
		onNone: function() {
			dispatch(searchNoneActionCreator())
		}
	}
}

const SearchableForm = connect(
	null,
	mapDispatchToProps
)(React.createClass({
	handleSearch: function(e) {
		if (e.target.value.length > 0) {
			this.props.onSearch(e.target.value)
		} else {
			this.props.onNone()
		}
	},
	render: function() {
		return (
		        <form className={style.searchForm}>
		        	<input type="search" onChange={this.handleSearch} />
		        </form>
		)
	}
}))

export default SearchableForm
