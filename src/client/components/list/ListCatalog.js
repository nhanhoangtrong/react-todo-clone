import React from 'react'
import style from '../../style/style.styl'
import List from './List'

const ListCatalog = ({lists}) => (
	<ul className={style.listCatalog}>
		{lists.map((list) => (
			<List list={list} key={list._id} />
		))}
	</ul>
)

export default ListCatalog