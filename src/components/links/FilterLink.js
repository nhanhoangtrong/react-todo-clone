import React from 'react'
import HeaderLink from './HeaderLink'
import { connect } from 'react-redux'
import { setFilterActionCreator } from '../../redux/action_creators/filter_action_creators'

const mapStateToProps = (state, ownProps) => {
	return {
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setFilterActionCreator(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps,
)(HeaderLink)

export default FilterLink
