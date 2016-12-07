import React from 'react'
import style from '../../style/style.styl'

const Todo = ({todo}) => (
	<li className={style.todo + ' ' + (todo.completed ? style.completed : style.uncompleted)}>
		<p><span className={style.order}>{todo.order}</span> {todo.text}</p>
	</li>
)

export default Todo