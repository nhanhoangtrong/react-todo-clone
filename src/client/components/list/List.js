import React from 'react'
import style from '../../style/style.styl'

const List = ({list}) => (
	<li className={style.list}>
		<p><span className={style.order}>{list.order}</span> {list.title}</p>
	</li>
)

export default List