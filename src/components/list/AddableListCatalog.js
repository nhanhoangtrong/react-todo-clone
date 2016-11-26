import { connect } from 'react-redux'
import { createList } from '../../redux/action_creators/list_action_creators'
import ListCatalog from './ListCatalog'

const mapStateToProps = (state, ownProps) => {
	return {
		lists: state.lists
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCreateList: (title) => {
			dispatch(createList(title))
		}
	}
}

const AddableListCatalog = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListCatalog)

export default AddableListCatalog
