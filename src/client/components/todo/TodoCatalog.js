import React from 'react'
import Todo from './Todo'
import style from '../../style/style.styl'

const TodoCatalog = ({todos}) => (
	<ul className={style.todoCatalog}>
		{todos.map((todo) => (
			<Todo todo={todo} key={todo._id} />
		))}
	</ul>
)