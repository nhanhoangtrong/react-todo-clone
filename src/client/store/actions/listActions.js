import {
	LIST_CREATE,
	LIST_EDIT,
	LIST_REMOVE
} from '.'

export const listCreate = (title, order, _folder, _user) => ({
	type: LIST_CREATE,
	title: title,
	order: order,
	_folder: _folder,
	_user: _user
})

export const listEdit = (_id, title, order, _folder) => ({
	type: LIST_EDIT,
	title: title,
	order: order,
	_folder: _folder
})

export const listRemove = (_id) => {
	type: LIST_REMOVE,
	_id: _id
}