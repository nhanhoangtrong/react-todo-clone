import React from 'react'
import Folder from './Folder'
import style from '../../style/style.styl'

const FolderCatalog = ({folders}) => (
	<ul className={style.folderCatalog}>
		{folders.map((folder) => (
			<Folder folder={folder} key={folder._id} />
		))}
	</ul>
)

export default FolderCatalog