import React from 'react'
import style from '../../style/style.styl'

export default React.createClass({
	handleChange: function(e) {
		this.props.onEditTitleSubmit(e.target.value)
	},
	handleOnRemove: function(e) {
		e.preventDefault()
		this.props.onClickRemove()
	},
	render: function() {
		return (
	        <div className={style.listHeader}>
	        	<input type="text" placeholder="Click to edit list name" value={this.props.list.title} onChange={this.handleChange}/>
	        	<a href="#" className={style.iconButton} onClick={this.handleOnRemove}><span className={style.iconButtonRemove}/></a>
	        </div>
        )
	}
})
