import React from 'react'
import style from '../../style/style.styl'

export default React.createClass({
	render: function() {
		return (
			<div className={style.appHeader}>
				<h1>User information</h1>
				<p>User manager, includes changing password, contact info</p>
			</div>
		)
	}
})