import {
	TODO_CREATE,
	TODO_EDIT,
	TODO_MARK,
	TODO_REMOVE
} from '.'

export const todoCreate = (text, order, _user) => ({
	type: TODO_CREATE,
	text: text,
	order: order,
	_user: _user
})

export const todoEdit = (_id, text, order) => ({
	type: TODO_EDIT,
	_id: _id,
	text: text,
	order: order
})

export const todoMark = (_id) => ({
	type: TODO_MARK,
	_id: _id
})

export const todoRemove = (_id) => ({
	type: TODO_REMOVE,
	_id: _id
})