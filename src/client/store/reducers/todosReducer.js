import { TODO_CREATE, TODO_EDIT, TODO_MARK, TODO_REMOVE } from '../actions';

export default (state = [], action) => {
	switch (action.type) {
		case TODO_CREATE:
			return [ 'hello' ]
		default:
			return state
	}
}