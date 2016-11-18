import {
	connect
} from 'react-redux'
import {
	editDay,
	removeDay
} from '../redux/action_creators/day_action_creators'
import ToDoDayHeader from './ToDoDayHeader'


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onEditDateSubmit: (date) => {
			dispatch(editDay(ownProps.day.id, date))
		},
		onClickRemove: () => {
			dispatch(removeDay(ownProps.day.id))
		}
	}
}

const EditableToDoDayHeader = connect(
	null,
	mapDispatchToProps
)(ToDoDayHeader)

export default EditableToDoDayHeader