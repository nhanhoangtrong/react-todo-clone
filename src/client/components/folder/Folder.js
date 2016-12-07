import React from 'react'
import style from '../../style/style.styl'
import ListCatalog from '../list/ListCatalog'

const Folder = ({folder, lists}) => (
	<li className={style.folder}>
		<p><span className={style.order}>{folder.order}</span> {folder.title}</p>
		<ListCatalog lists={lists} />
	</li>
)

export default Folder