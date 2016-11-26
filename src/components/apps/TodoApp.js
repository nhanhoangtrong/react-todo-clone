import React from 'react'
import style from '../../style/style.styl'
import AddableListCatalog from '../list/AddableListCatalog'
import TodoAppHeader from './TodoAppHeader'

export default React.createClass({
	render: function() {
		return (
			<div className={style.todoApp}>
				<TodoAppHeader />
				<AddableListCatalog />
			</div>
		)
	}
})
