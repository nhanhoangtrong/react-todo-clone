import React from 'react'
import ToDoApp from './ToDoApp.js'
import { Link, IndexLink } from 'react-router'
import style from '../style/style.styl'

export default React.createClass({
  render: function() {
    return (
      <div className={style.app}>
      	<div className={style.navBar}>
		  	<IndexLink to="/" activeClassName={style.active}>Home</IndexLink>
		  	<Link to="/todo" activeClassName={style.active}>ToDo</Link>
      	</div>
        {this.props.children}
      </div>
    )
  }
})
