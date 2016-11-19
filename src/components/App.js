import React from 'react'
import ToDoApp from './ToDoApp.js'
import { IndexLink, Link } from 'react-router'
import style from '../style/style.styl'

export default React.createClass({
  render: function() {
    return (
      <div className={style.app}>
      	<div className={style.navBar}>
		  	<IndexLink to="/" activeClassName={style.active}>Home</IndexLink>
		  	<Link to="/todo" activeClassName={style.active}>To Do</Link>
        <Link to="/user" activeClassName={style.active}>User</Link>
      	</div>
        {this.props.children}
      </div>
    )
  }
})
