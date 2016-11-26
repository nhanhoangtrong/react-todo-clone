import React from 'react'
import style from '../../style/style.styl'
import UserAppHeader from './UserAppHeader'

export default React.createClass({
	render: function() {
		return (
			<div className={style.userApp}>
				<UserAppHeader />
			</div>
		)
	}
})