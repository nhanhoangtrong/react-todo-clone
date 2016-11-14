import React from 'react'
import ToDoApp from './ToDoApp.js'
import { IndexLink } from 'react-router'
import FilterLink from './FilterLink'
import style from '../style/style.styl'

export default React.createClass({
  render: function() {
    return (
      <div className={style.app}>
      	<div className={style.navBar}>
		  	<IndexLink to="/" activeClassName={style.active}>Home</IndexLink>
		  	<FilterLink to="/todo">ToDo</FilterLink>
      	</div>
        {this.props.children}
      </div>
    )
  }
})
