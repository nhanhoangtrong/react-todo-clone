import { Link } from 'react-router'
import React from 'react'
import style from '../../style/style.styl'

export default React.createClass({
	render: function() {
		return (
			<Link {...this.props} activeClassName={style.active} />
		)
	}
})
