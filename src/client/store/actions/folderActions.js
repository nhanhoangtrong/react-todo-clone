import {
	FOLDER_CREATE,
	FOLDER_EDIT,
	FOLDER_REMOVE
} from '.'

export const folderCreate = (title, order, _user) => ({
	type: FOLDER_CREATE,
	title: title,
	order: order,
	_user: _user
})

export const folderEdit = (_id, title, order) => ({
	type: FOLDER_EDIT,
	title: title,
	order: order
})

export const folderRemove = (_id) => {
	type: FOLDER_REMOVE,
	_id: _id
}