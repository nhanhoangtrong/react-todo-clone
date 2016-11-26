import {
	connect
} from 'react-redux'
import {
	editList,
	removeList
} from '../../redux/action_creators/list_action_creators'
import ListHeader from './ListHeader'


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onEditDateSubmit: (title) => {
			dispatch(editList(ownProps.list.id, title))
		},
		onClickRemove: () => {
			dispatch(removeList(ownProps.list.id))
		}
	}
}

const EditableListHeader = connect(
	null,
	mapDispatchToProps
)(ListHeader)

export default EditableListHeader
