import React from 'react'
import style from '../../style/style.styl'
import FilterableList from './FilterableList'

export default React.createClass({
	handleAdd: function(e) {
		e.preventDefault()
		var title = new Date()
		this.props.onCreateList(title)
	},
	render: function() {
		return (
			<div className={style.listCatalog}>
				{this.props.lists.map( list => {
					return (
						<FilterableList list={list} key={list.id} />
					)
				})}
				<div className={style.listCatalogBottom}>
					<a href="#" className={style.button} onClick={this.handleAdd}>Add</a>
				</div>
			</div>
		)
	}
})
