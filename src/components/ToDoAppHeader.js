import React from 'react'
import style from '../style/style.styl'


export default React.createClass({
	render: function() {
		return (
		        <div className={style.todoAppHeader}>
		        	<h1>ToDo Application</h1>
		        	<p>A small ToDo Application for everyone</p>
		        </div>
		        )
	}
})