import {
	connect
} from 'react-redux'
import {
	editDay,
	removeDay
} from '../redux/action_creators/day_action_creators'
import ToDoDayHeader from './ToDoDayHeader'

const mapStateToProps = (state, ownProps) => {
	return {
		todoDate: state.date
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onEditSubmit: (date) => {
			dispatch(editDay(date))
		},
		onClickRemove: (id) => {
			dispatch(removeDay(id))
		}
	}
}

const EditableToDoDayHeader = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoDayHeader)

export default EditableToDoDayHeader