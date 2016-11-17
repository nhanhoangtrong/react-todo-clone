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
		onEditDateSubmit: (day_id, date) => {
			dispatch(editDay(day_id, date))
		},
		onClickRemove: (id) => {
			dispatch(removeDay(id))
		}
	}
}

const EditableToDoDayHeader = connect(
	null,
	mapDispatchToProps
)(ToDoDayHeader)

export default EditableToDoDayHeader