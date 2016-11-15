import { connect } from 'react-redux'
import { createDay } from '../redux/action_creators/day_action_creators'
import ToDoDayList from './ToDoDayList'

const mapStateToProps = (state, ownProps) => {
	return {
		days: state.days
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCreateDay: (date) => {
			dispatch(createDay(date))
		}
	}
}

const AddableToDoDayList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoDayList)

export default AddableToDoDayList