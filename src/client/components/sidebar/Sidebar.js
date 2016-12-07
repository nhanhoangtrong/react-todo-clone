import React from 'react'
import style from '../../style/style.styl'

const Sidebar = (props) => (
	<aside className={style.sidebar + ' ' + props.name}>
		{props.children}
	</aside>
)

export default Sidebar